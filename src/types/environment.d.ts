import driver from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or other driver


declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_AUTH_TOKEN: string;
            NODE_ENV: 'development' | 'production';
            DB_TYPE: driver;
            PORT?: number;
            DB_PORT?: number;
            PWD: string;
        }
    }
}

export {}