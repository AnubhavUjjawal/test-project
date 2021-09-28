import { Users } from "../../model/users.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { JobPost } from "../../model/job-post.entity";
import { JobRole } from "../../model/job-role.entity";
import { getFakeJobPost, getFakeJobRole } from "../factories/jobs.factory";

export default class CreateJobs implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    // await factory(JobPost)()
    //   .map(async (post: JobPost) => {
    //     // Pick a random HIRING_MANAGER for this post.
    //     const HR = await connection.getRepository(Users)
    //       .createQueryBuilder("users")
    //       .where("role_id = 'HIRING_MANAGER'")
    //       .orderBy("random()")
    //       .getOne()
    //     post.user_id = HR.user_id
    //     const roles: JobRole[] = await factory(JobRole)({ post }).createMany(Math.floor(Math.random() * 10 + 1))
    //     return post
    //   })
    //   .createMany(3000000)
    for (let index = 0; index < 3000000; index++) {
      const HR = await connection.getRepository(Users)
          .createQueryBuilder("users")
          .where("role_id = 'HIRING_MANAGER'")
          .orderBy("random()")
          .getOne()
      const post = getFakeJobPost();
      post.user_id = HR.user_id
      const roles: JobRole[] =  new Array(Math.floor(Math.random() * 10 + 1)).map(() => getFakeJobRole({ post }))
      await connection.getRepository(JobRole).save(roles)
      await connection.getRepository(JobPost).save(roles)
      console.log(`Inserted ${roles.length} jobRoles for ${index} jobPost`)
    }
  }
}
