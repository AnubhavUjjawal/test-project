import {MigrationInterface, QueryRunner} from "typeorm";

export class addedUsers1632780026190 implements MigrationInterface {
    name = 'addedUsers1632780026190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" BIGSERIAL NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isArchived" boolean NOT NULL DEFAULT false, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "internalComment" character varying(300), "user_id" text, "first_name" character varying(300) NOT NULL, "last_name" character varying(300) NOT NULL, "country_code" text, "age" integer, "last_salary" integer, "currency" text, "role_id" text, "is_disabled" boolean, "is_admin" boolean, "status" text, "lat" numeric, "lng" numeric, "country_id" text, "city_id" text, "has_work_experience" boolean, "experience_years" integer, "experience_months" integer, "fcm_token" text, "organisation_id" text, "meta" jsonb, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_96aac72f1574b88752e9fb0008" ON "users" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isArchived"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createDateTime"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updateDateTime"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "internalComment"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isArchived" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "internalComment" character varying(300)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_active" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_archived" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "create_datetime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "update_dateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "internal_comment" character varying(300)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "internal_comment"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "update_dateTime"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "create_datetime"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_archived"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "internalComment"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updateDateTime"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createDateTime"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isArchived"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "internalComment" character varying(300)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isArchived" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`DROP INDEX "IDX_96aac72f1574b88752e9fb0008"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
