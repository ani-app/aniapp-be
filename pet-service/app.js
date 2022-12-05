import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import petRouter from './routes/pets.js';
import breedRouter from './routes/breeds.js';
import breedTypeRouter from './routes/breedType.js';
import colourRouter from './routes/colours.js';
import genderRouter from './routes/genders.js';
import createDB from './database/create-db.js';
import initDbData from './database/init-db.js';

async function getApp() {
    var app = express();

    await createDB();
    await initDbData();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser())

    app.use('/pets', petRouter);
    app.use('/breeds', breedRouter);
    app.use('/breed-types', breedTypeRouter);
    app.use('/colours', colourRouter);
    app.use('/genders', genderRouter);
    return app;

}

export default getApp;
