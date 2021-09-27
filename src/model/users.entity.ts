import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'users' })
export class Users extends BaseEntity {

  @Index()
  @Column({ type: "text", nullable: true })
  user_id: string;

  @Column({ type: 'varchar', length: 300 })
  first_name: string;

  @Column({ type: 'varchar', length: 300 })
  last_name: string;

  @Column({ type: "text", nullable: true })
  country_code: string;

  @Column({ type: "int", nullable: true })
  age: number;

  @Column({ type: "int", nullable: true })
  last_salary: number;

  @Column({ type: "text", nullable: true })
  currency: string;

  // To decide permissions for user
  @Column({ type: "text", nullable: true })
  role_id: string;

  // To check if account deactivated
  @Column({ type: "bool", nullable: true })
  is_disabled: boolean;

  @Column({ type: "bool", nullable: true })
  is_admin: boolean;

  // ['ONBOARDING_PENDING' 'VERIFICATION_PENDING' 'VERIFIED']
  @Column({ type: "text", nullable: true })
  status: string;

  // current location
  @Column({ type: "decimal", nullable: true })
  lat: number;

  @Column({ type: "decimal", nullable: true })
  lng: number;

  @Column({ type: "text", nullable: true })
  country_id: string;

  @Column({ type: "text", nullable: true })
  city_id: string;

  @Column({ type: "bool", nullable: true })
  has_work_experience: boolean;

  @Column({ type: "int", nullable: true })
  experience_years: number;

  @Column({ type: "int", nullable: true })
  experience_months: number;

  @Column({ type: "text", nullable: true })
  fcm_token: string;

  @Column({ type: "text", nullable: true })
  organisation_id: string;

  // contains titles and categories
  @Column({ type: "jsonb", nullable: true })
  meta: any;
}