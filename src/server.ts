import { AppDataSource } from "./database/data-source";
import 'reflect-metadata';
import express from "express";

import cors from "cors";
import routers from "./app/routes/Route";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routers);

AppDataSource.initialize().then(async()=>{
    console.log("Conectado!");
    app.listen(3333,()=>{
        console.log("Server inicializado...");
    })
})