import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1734983113904 } from "./migrations/1734983113904-CreateUsersTable";
import User from "../app/entities/Users";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "teste",
    port: 3306,
    username: "teste",
    password: "teste",
    database: "db_teste_teste",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1734983113904],
    subscribers: [],
})
