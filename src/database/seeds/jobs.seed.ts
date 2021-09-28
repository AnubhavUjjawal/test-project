import { Users } from "../../model/users.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { JobPost } from "../../model/job-post.entity";
import { JobRole } from "../../model/job-role.entity";

export default class CreateJobs implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(JobPost)()
      .map(async (post: JobPost) => {
        // Pick a random HIRING_MANAGER for this post.
        const HR = await connection.getRepository(Users)
          .createQueryBuilder("users")
          .where("role_id = 'HIRING_MANAGER'")
          .orderBy("random()")
          .getOne()
        post.user_id = HR.user_id
        const roles: JobRole[] = await factory(JobRole)({ post }).createMany(Math.floor(Math.random() * 10 + 1))
        return post
      })
      .createMany(3000000)
  }
}
