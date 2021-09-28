import { getFakeJobPost, getFakeJobRole } from "src/database/factories/jobs.factory";
import { JobPost } from "src/model/job-post.entity";
import { JobRole } from "src/model/job-role.entity";
import { Users } from "src/model/users.entity";
import {getConnection, MigrationInterface, QueryRunner} from "typeorm";

export class seedJobs1632821322960 implements MigrationInterface {
    name = 'seedJobs1632821322960'

    public async up(queryRunner: QueryRunner): Promise<void> {
      const connection = getConnection()
      for (let index = 0; index < 3000000; index++) {

        const HR = await connection.getRepository(Users)
            .createQueryBuilder("users")
            .where("role_id = 'HIRING_MANAGER'")
            .andWhere("random() < 0.01")
            .getOne()
        const post = getFakeJobPost();
        post.user_id = HR.user_id
        const roles: JobRole[] =  [...Array(Math.floor(Math.random() * 10 + 1))].map(() => getFakeJobRole({ post }))
        // console.log(roles)
        await connection.getRepository(JobRole).save(roles)
        await connection.getRepository(JobPost).save(post)
        console.log(`Inserted ${roles.length} jobRoles for ${index+1} jobPost`)
      }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
