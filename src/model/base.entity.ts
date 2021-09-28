import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, Index } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ type: 'boolean', default: true })
    is_active: boolean;

    @Column({ type: 'boolean', default: false })
    is_archived: boolean;

    // TODO: Index or not ??
    @Index()
    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    create_datetime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    update_dateTime: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    internal_comment: string | null;
}
