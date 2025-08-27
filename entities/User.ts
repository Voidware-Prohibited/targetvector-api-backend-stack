import { v4 } from 'uuid';
import {Entity, PrimaryKey, Property} from "@mikro-orm/core";


@Entity()
export class User {

    @PrimaryKey({ type: 'uuid' })
    uuid = v4();

    @Property()
    email!: string;

    @Property()
    password!: string;

    @Property({ onCreate: () => new Date() })
    createdAt!: Date;

    @Property({ onUpdate: () => new Date() })
    updatedAt!: Date;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

}