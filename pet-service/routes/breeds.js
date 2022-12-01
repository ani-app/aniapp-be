import { Router } from 'express';
var router = Router();
import breedService from '../service/breeds';

router.get('/', async function(req, res) {
    try {
        breeds = await breedService.GetAllBreeds();
        res.status(200).json(breeds);
    }catch (err) {
        console.log(err);
        res.status(400).json({'error' : err});
    }
});

export default router;

