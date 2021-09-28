import { define } from "typeorm-seeding"
import * as faker from 'faker';
import { JobPost } from "../../model/job-post.entity";
import { nanoid } from "nanoid";
import { JobRole } from "../../model/job-role.entity";

define(JobPost, (_: typeof faker) => {

  const jobPost = new JobPost()
  jobPost.job_id = nanoid()
  jobPost.job_summary = faker.lorem.sentence(10)
  jobPost.job_desc = faker.lorem.lines(5)
  jobPost.is_paid = faker.datatype.boolean()
  if(jobPost.is_paid) {
    jobPost.is_paid_description = faker.lorem.sentences(3)
  }
  jobPost.emails = [faker.internet.email()]
  jobPost.phones = [faker.phone.phoneNumber()]
  jobPost.nationality = faker.address.countryCode()
  jobPost.status = faker.random.arrayElement(['PUBLISHED', 'UNPUBLISHED'])
  return jobPost
})

define(JobRole, (_: typeof faker, context: { post: JobPost }) => {

  const jobRole = new JobRole()
  jobRole.title = faker.name.jobTitle()
  jobRole.category = faker.commerce.department()
  jobRole.desc = faker.lorem.text()
  jobRole.summary = faker.lorem.text()
  jobRole.user_id = context.post.user_id
  jobRole.job_id = context.post.job_id
  jobRole.status = context.post.status
  jobRole.no_of_openings = faker.datatype.number(50)
  jobRole.for_experienced = faker.datatype.boolean()
  jobRole.expected_salary = faker.datatype.number(10000)
  jobRole.expected_salary_currency = faker.finance.currencyCode()
  jobRole.sex = faker.random.arrayElement(["M", "F"])
  jobRole.meta = JSON.parse(faker.datatype.json())
  jobRole.age = faker.datatype.number(100)
  return jobRole
})
