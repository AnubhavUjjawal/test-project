import { Injectable, Logger } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { JobPost } from './model/job-post.entity';
import { JobRole } from './model/job-role.entity';
import { Users } from './model/users.entity';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private readonly usersRepository: Repository<Users>;
  private readonly jobPostRepository: Repository<JobPost>;
  private readonly jobRoleRespository: Repository<JobRole>;

  constructor(connection: Connection) {
    this.usersRepository = connection.getRepository(Users);
    this.jobPostRepository = connection.getRepository(JobPost);
    this.jobRoleRespository = connection.getRepository(JobRole);
  }

  getHello(): { data: string } {
    this.logger.warn({ log: "Hello World!" })
    return { data: 'Hello World!' };
  }

  async getUserDetails(id: number) {
    this.logger.log({ log: "getting details for user", id })
    const user = await this.usersRepository.findOneOrFail(id)
    this.logger.log({ log: "got details for user", id })
    return user
  }

  async getJobsByUser(userId: string, offset: number = 0) {
    this.logger.log({ log: "getting all jobs posted by user", userId })
    const results = await this.jobPostRepository
      .createQueryBuilder("job_post")
      .addSelect("job_role.*")
      // .innerJoin(JobPost, "job_post", "job_post.user_id = users.user_id")
      .innerJoin(JobRole, "job_role", "job_role.job_id = job_post.job_id")
      .where("job_post.user_id = :userId", { userId })
      .andWhere("job_role.id > :offset", { offset })
      .addOrderBy("job_role.id")
      .limit(100)
      .getRawMany()
    this.logger.log({ log: "got all jobs posted by user", userId })
    return results
  }

  async getJobRoleDetails(roleId: number) {
    this.logger.log({ log: "getting jobrole by id", roleId })
    const result = await this.jobPostRepository
      .createQueryBuilder("job_post")
      .addSelect("job_role.*")
      // .innerJoin(JobPost, "job_post", "job_post.user_id = users.user_id")
      .innerJoin(JobRole, "job_role", "job_role.job_id = job_post.job_id")
      .where("job_role.id = :roleId", { roleId })
      .getRawMany()
    this.logger.log({ log: "got jobrole by id", roleId })
    return result
  }
}
