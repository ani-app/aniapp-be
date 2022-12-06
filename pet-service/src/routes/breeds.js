import { Router } from 'express';
import ErrorResponse from '../response/error-response';
import SuccessResponse from '../response/success-response';
var router = Router();
import breedService from '../service/breeds';

router.get('/', async function(req, res) {
    try {
        let breeds = await breedService.GetAll();
        res.status(200).json(breeds);
    }catch (err) {
        console.log(err);
        res.status(400).json({'error' : err});
    }
});

router.get('/:id', async function(req, res) {
    try {
        let breed = await breedService.Get(req.params.id);
        res.status(200).json(SuccessResponse('breed successfully fetched', breed));
    }catch (err) {
        res.status(400).json(ErrorResponse('breed fetch failed', err))
    }
});

router.post('/', async function(req, res) {
    try {
        let breed = await breedService.Create(req.body);
        res.status(200).json(SuccessResponse('breed successfully created', breed));
    } catch (err) {
        res.status(400).json(ErrorResponse('breed not created', err));
    }
});

router.put('/:id', async function(req, res) {
    try {
        req.body.id = req.params.id; 
        let breed = await breedService.Update(req.body);
        res.status(200).json(SuccessResponse('breed successfully updated', breed));
    } catch (err) {
        res.status(400).json(ErrorResponse('breed not updated', err));
    }
});

router.delete('/', async function(req, res) {
    try {
        await breedService.Delete(req.params.id);
        res.status(200).json(SuccessResponse('breed successfully deleted'));
    } catch (err) {
        res.status(400).json(ErrorResponse('breed not deleted', err));
    }
});

export default router;

