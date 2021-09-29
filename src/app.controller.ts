import { BadRequestException, Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private health: HealthCheckService, private db: TypeOrmHealthIndicator) { }

  @Get()
  getHello(): { data: string } {
    return this.appService.getHello();
  }

  @Get("/user/:id")
  async getUserDetails(@Param() params: { id: number }) {
    try {
      const user = await this.appService.getUserDetails(params.id)
      return user
    } catch (error) {
      return new NotFoundException()
    }
  }

  @Get("/jobs/:userId/")
  async getJobsPostedByUser(@Param() params: { userId: string }, @Query() query: { offset?: number}) {
    try {
      const jobsByUser = await this.appService.getJobsByUser(params.userId, query.offset)
      return jobsByUser
    } catch (error) {
      // console.log(error)
      throw new BadRequestException(error)
    }
  }

  @Get("/jobs/role/:roleId")
  async getJobRoleDetails(@Param() params: { roleId: number }) {
    try {
      const jobsByUser = await this.appService.getJobRoleDetails(params.roleId)
      return jobsByUser
    } catch (error) {
      // console.log(error)
      throw new BadRequestException(error)
    }
  }

  @Get('/health')
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database'),
    ])
  }
}
