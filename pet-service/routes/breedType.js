import { Router } from 'express';
import ErrorResponse from '../response/error-response';
import SuccessResponse from '../response/success-response';
import breedTypeService from '../service/breedTypes';

var router = Router();

router.get('/', async function(req, res) {
    try {
        let breedTypes = await breedTypeService.GetAll();
        res.status(200).json(SuccessResponse('breed types successfully fetched', breedTypes));
    }catch (err) {
        console.log(err);
        res.status(400).json(ErrorResponse('breed type fetch failed', err));
    }
});

router.get('/:id', async function(req, res) {
    try {
        let breedType = await breedTypeService.Get(req.params.id);
        res.status(200).json(SuccessResponse('breed type successfully fetched', breedType));
    }catch (err) {
        res.status(400).json(ErrorResponse('breed type fetch failed', err))
    }
});

router.post('/', async function(req, res) {
    try {
        let breedType = await breedTypeService.Create(req.body);
        res.status(200).json(SuccessResponse('breed successfully created', breedType));
    } catch (err) {
        res.status(400).json(ErrorResponse('breed not created', err));
    }
});

router.put('/:id', async function(req, res) {
    try {
        req.body.id = req.params.id; 
        let breedType = await breedTypeService.Update(req.body);
        res.status(200).json(SuccessResponse('breed successfully updated', breedType));
    } catch (err) {
        res.status(400).json(ErrorResponse('breed not updated', err));
    }
});

router.delete('/', async function(req, res) {
    try {
        await breedTypeService.Delete(req.params.id);
        res.status(200).json(SuccessResponse('breed successfully deleted'));
    } catch (err) {
        res.status(400).json(ErrorResponse('breed not deleted', err));
    }
});

export default router;

