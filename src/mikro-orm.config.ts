// mikro-orm.config.js
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql'; // or other driver
import { Migrator } from '@mikro-orm/migrations';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as DotEnv from 'dotenv';
import 'dotenv/config.js';
DotEnv.config();

export default defineConfig({
    metadataProvider: TsMorphMetadataProvider,
    dynamicImportProvider: (id) => import(id),
    driver: PostgreSqlDriver,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    entities: ['./dist/entities/**/*.js'], // Adjust path to your entities
    entitiesTs: ['./src/entities', './src/modules/projects/entities'],
    extensions: [Migrator],
    migrations: {
        path: './src/migrations',
        pathTs: './src/migrations',
    },
    // enable debug mode to log SQL queries and discovery information
    debug: true,
    // other MikroORM options
    discovery: {
        warnWhenNoEntities: false, // by default, discovery throws when no entity is processed
        // requireEntitiesArray: true, // force usage of class references in `entities` instead of paths
        alwaysAnalyseProperties: false, // do not analyse properties when not needed (with ts-morph)
    }
});