import { v4 } from 'uuid';
import {Entity, PrimaryKey, Property, ManyToOne, Ref} from "@mikro-orm/core";
import { Role } from './Role';

@Entity()
export class User {

    @PrimaryKey({ type: 'uuid' })
    uuid = v4();

    @Property()
    email!: string;

    @Property()
    password!: string;

    @Property()
    oauthId!: string; // ID from OAuth provider (e.g., Google)

    @ManyToOne(() => Role, { wrappedReference: true })
    role!: Ref<Role>;

    @Property({ onCreate: () => new Date() })
    createdAt!: Date;

    @Property({ onUpdate: () => new Date() })
    updatedAt!: Date;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

}