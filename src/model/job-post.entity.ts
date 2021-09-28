import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("job_post")
export class JobPost extends BaseEntity {

	@Column({ type: "text", nullable: true })
	job_summary: string;

	@Column({ type: "text", nullable: true })
	job_desc: string;

	@Index()
	@Column({ type: "text", nullable: true })
	user_id: string;

	@Index()
	@Column({ type: "text", nullable: true })
	job_id: string;

	@Column({ type: "bool", nullable: true })
	is_paid: boolean;

	@Column({ type: "text", nullable: true })
	is_paid_description: string;

	@Column({ type: "jsonb", nullable: true })
	emails: string[];

	@Column({ type: "jsonb", nullable: true })
	phones: string[];

	@Column({ type: "text", nullable: true })
	nationality: string;

	// @Column({ type: "int", nullable: true })
	// interview_location_id: string;

	// @Column({ type: "int", nullable: true })
	// job_location_id: string;

	// @Index()
	// @Column({ type: "bool", nullable: true })
	// interview_loc_same_as_job_loc: boolean;

	@Column({ type: "date", nullable: true })
	interview_date: Date;

	// ['PUBLISHED', 'UNPUBLISHED', 'DELETED']
	@Column({ type: "text", nullable: true })
	status: string;

	@Column({ type: "jsonb", nullable: true })
	meta: any;

}
