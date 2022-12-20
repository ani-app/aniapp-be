import sequelize from "./connection";
import createModelsAndRelations from "../models/associations";

export default async function createDB() {
    try {
        sequelize.authenticate();
        createModelsAndRelations();
        await sequelize.sync({force: true});
    }catch(err) {
        console.log('Unable to connect to db', err);
    }
}
