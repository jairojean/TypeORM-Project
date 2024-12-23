import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "test",
    port: 3306,
    username: "test",
    password: "test",
    database: "db_teste_teste",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
