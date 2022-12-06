import { Router } from 'express';
import ErrorResponse from '../response/error-response';
import SuccessResponse from '../response/success-response';
import genderService from '../service/genders';

var router = Router();

router.get('/', async function(req, res) {
    try {
        let colours = await genderService.GetAll();
        res.status(200).json(SuccessResponse('genders successfully fetched', colours));
    }catch (err) {
        console.log(err);
        res.status(400).json(ErrorResponse('genders fetch failed', err));
    }
});

router.get('/:id', async function(req, res) {
    try {
        let colour = await genderService.Get(req.params.id);
        res.status(200).json(SuccessResponse('gender successfully fetched', colour));
    }catch (err) {
        res.status(400).json(ErrorResponse('gender fetch failed', err))
    }
});

router.post('/', async function(req, res) {
    try {
        let colour = await genderService.Create(req.body);
        res.status(200).json(SuccessResponse('gender successfully created', colour));
    } catch (err) {
        res.status(400).json(ErrorResponse('gender not created', err));
    }
});

router.put('/:id', async function(req, res) {
    try {
        req.body.id = req.params.id; 
        let colour = await genderService.Update(req.body);
        res.status(200).json(SuccessResponse('gender successfully updated', colour));
    } catch (err) {
        res.status(400).json(ErrorResponse('gender not updated', colour));
    }
});

router.delete('/', async function(req, res) {
    try {
        await genderService.Delete(req.params.id);
        res.status(200).json(SuccessResponse('gender successfully deleted'));
    } catch (err) {
        res.status(400).json(ErrorResponse('gender not deleted', err));
    }
});

export default router;

