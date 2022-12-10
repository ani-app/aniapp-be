import request from 'supertest';
import getServer from '../src/server'
import sequelize from '../src/database/connection';
import populateDb from './populate-db';

const baseUrl = '/pets';

describe('Pets CRUD', () => {
    let server = null;
    let app = null;
    let token = null;

    beforeAll(async () => {
        server = await getServer();
        token = await populateDb();
        app = request(server);
    });

    it('should post a pet', async () => {
        const reqBody = {
            name: "misket", breedId: 2, genderId: 1, colourId: 2 
        }
        const res = await app.post(`${baseUrl}/`).send(reqBody);
        expect(res.statusCode).toEqual(200);
    });

});