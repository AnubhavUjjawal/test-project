import {MigrationInterface, QueryRunner} from "typeorm";

export class addedJobPostandJobRole1632808365762 implements MigrationInterface {
    name = 'addedJobPostandJobRole1632808365762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "job_post" ("id" BIGSERIAL NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "is_archived" boolean NOT NULL DEFAULT false, "create_datetime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_dateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "internal_comment" character varying(300), "job_summary" text, "job_desc" text, "user_id" text, "job_id" text, "is_paid" boolean, "is_paid_description" text, "emails" jsonb, "phones" jsonb, "nationality" text, "interview_date" date, "status" text, "meta" jsonb, CONSTRAINT "PK_a70f902a85e6de57340d153c813" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d92e385b9c85dac0c8ce6c838c" ON "job_post" ("create_datetime") `);
        await queryRunner.query(`CREATE INDEX "IDX_22b43575b4181265dc88b0936f" ON "job_post" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_06a6ee4d3c162d9e048a8ce56c" ON "job_post" ("job_id") `);
        await queryRunner.query(`CREATE TABLE "job_role" ("id" BIGSERIAL NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "is_archived" boolean NOT NULL DEFAULT false, "create_datetime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_dateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "internal_comment" character varying(300), "title" text, "category" text, "summary" text, "desc" text, "user_id" text, "job_id" text, "no_of_openings" integer, "for_experienced" boolean, "min_experience" numeric, "max_experience" numeric, "expected_salary" integer, "expected_salary_currency" text, "status" text, "sex" text, "country" jsonb, "age" integer, "promo_notification_count" integer, "meta" jsonb, CONSTRAINT "PK_c4851e6391dfa2a91f552b057d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1257e273bee7ec2ad87d1ec443" ON "job_role" ("create_datetime") `);
        await queryRunner.query(`CREATE INDEX "IDX_3e8d4e43e325abf2f05ccbab99" ON "job_role" ("category") `);
        await queryRunner.query(`CREATE INDEX "IDX_79da2e5813789db5dc9d5cb23e" ON "job_role" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a155d1cea432d31b1573f32cd3" ON "job_role" ("job_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_1f42c8283acb395f0257cb654e" ON "public"."users" ("create_datetime") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_1f42c8283acb395f0257cb654e"`);
        await queryRunner.query(`DROP INDEX "IDX_a155d1cea432d31b1573f32cd3"`);
        await queryRunner.query(`DROP INDEX "IDX_79da2e5813789db5dc9d5cb23e"`);
        await queryRunner.query(`DROP INDEX "IDX_3e8d4e43e325abf2f05ccbab99"`);
        await queryRunner.query(`DROP INDEX "IDX_1257e273bee7ec2ad87d1ec443"`);
        await queryRunner.query(`DROP TABLE "job_role"`);
        await queryRunner.query(`DROP INDEX "IDX_06a6ee4d3c162d9e048a8ce56c"`);
        await queryRunner.query(`DROP INDEX "IDX_22b43575b4181265dc88b0936f"`);
        await queryRunner.query(`DROP INDEX "IDX_d92e385b9c85dac0c8ce6c838c"`);
        await queryRunner.query(`DROP TABLE "job_post"`);
    }

}
