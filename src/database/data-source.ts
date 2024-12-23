import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1734983113904 } from "./migrations/1734983113904-CreateUsersTable";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "db4free.net",
    port: 3306,
    username: "jairo1994",
    password: "123456789",
    database: "db_teste_teste",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [CreateUsersTable1734983113904],
    subscribers: [],
})
