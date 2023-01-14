import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import Router from './routes/router';
import createDB from './database/create-db.js';
import initDbData from './database/init-db.js';

async function getApp() {
    var app = express();

    await createDB();
    await initDbData();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser())

    app.use('/', Router);

    return app;

}

export default getApp;
