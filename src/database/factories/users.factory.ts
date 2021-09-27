import { Users } from "../../model/users.entity"
import { define } from "typeorm-seeding"
import * as faker from 'faker';

define(Users, (_: typeof faker) => {

  const user = new Users()
  user.user_id = faker.datatype.uuid()
  user.first_name = faker.name.firstName()
  user.last_name = faker.name.lastName()
  user.country_code = faker.address.countryCode()
  user.age = faker.datatype.number(100)
  user.experience_months = faker.datatype.number(11)
  user.experience_years = faker.datatype.number(11)
  user.fcm_token = faker.datatype.string(30)
  user.last_salary = faker.datatype.number(100)
  user.currency = faker.finance.currencyCode()
  user.role_id = faker.random.arrayElement(["HIRING_MANAGER", "CANDIDATE"])
  user.is_disabled = false
  user.is_admin = false
  user.status = faker.random.arrayElement(['ONBOARDING_PENDING', 'VERIFICATION_PENDING', 'VERIFIED'])
  user.has_work_experience = faker.datatype.boolean()
  user.organisation_id = faker.company.companyName()
  user.meta = JSON.parse(faker.datatype.json())
  user.lat = faker.datatype.number(100)
  user.lng = faker.datatype.number(100)
  user.city_id = faker.address.cityName()
  user.country_id = faker.address.country()
  return user
})