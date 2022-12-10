import sequelize from "./connection";
import createModelsAndRelations from "../models/relations";
import { DataTypes } from "sequelize";

export default async function createDB() {
    try {
        sequelize.authenticate();
        /*
        const test = sequelize.define('Test', {
            ex1 : DataTypes.STRING
        })
        await test.sync();
        await test.create({
            ex1 : 'selam'
        });*/
        createModelsAndRelations();
        await sequelize.sync({force: true});
    }catch(err) {
        console.log('Unable to connect to db', err);
    }
    // example data

}
