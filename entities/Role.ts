import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Role {
    @PrimaryKey()
    id!: number;

    @Property({ unique: true })
    name!: string; // e.g., 'user', 'admin'
}