import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("job_role")
export class JobRole extends BaseEntity{

	// Preprocess title, store all in caps.
	// When fetching, convert to Title Case or something like that.
	@Column({ type: "text", nullable: true })
	title: string;

	@Index()
	@Column({ type: "text", nullable: true })
	category: string;

	@Column({ type: "text", nullable: true })
	summary: string;

	@Column({ type: "text", nullable: true })
	desc: string;

	@Index()
	@Column({ type: "text", nullable: true })
	user_id: string;

	@Index()
	@Column({ type: "text", nullable: true })
	job_id: string;

	@Column({ type: "int", nullable: true })
	no_of_openings: number;

	// false for fresher
	@Column({ type: "bool", nullable: true })
	for_experienced: boolean;

	@Column({ type: "decimal", nullable: true })
	min_experience: number;

	@Column({ type: "decimal", nullable: true })
	max_experience: number;

	@Column({ type: "int", nullable: true })
	expected_salary: number;

	@Column({ type: "text", nullable: true })
	expected_salary_currency: string;

	// ['CREATED' 'VERIFIED' 'LIVE' 'DISABLED' 'REJECTED']
	@Column({ type: "text", nullable: true })
	status: string;

	@Column({ type: "text", nullable: true })
	sex: string;

	@Column({ type: "jsonb", nullable: true })
	country: any;

	@Column({ type: "int", nullable: true })
	age: number;

	@Column({ type: "int", nullable: true })
	promo_notification_count: number;

	@Column({ type: "jsonb", nullable: true })
	meta: any;

}
