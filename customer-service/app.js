import express from "express"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import createDB from "./database/create-db";
import initDB from "./database/init-db";

async function getApp() {
    var app = express();
    await createDB();
    await initDB();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    return app;

}

export default getApp;