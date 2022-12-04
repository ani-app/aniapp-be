import { Router } from 'express';
import ErrorResponse from '../response/error-response';
import SuccessResponse from '../response/success-response';
import colourService from '../service/colours';

var router = Router();

router.get('/', async function(req, res) {
    try {
        let colours = await colourService.GetAll();
        res.status(200).json(SuccessResponse('colours successfully fetched', colours));
    }catch (err) {
        console.log(err);
        res.status(400).json(ErrorResponse('colours fetch failed', err));
    }
});

router.get('/:id', async function(req, res) {
    try {
        let colour = await colourService.Get(req.params.id);
        res.status(200).json(SuccessResponse('colour successfully fetched', colour));
    }catch (err) {
        res.status(400).json(ErrorResponse('colour fetch failed', err))
    }
});

router.post('/', async function(req, res) {
    try {
        let colour = await colourService.Create(req.body);
        res.status(200).json(SuccessResponse('colour successfully created', colour));
    } catch (err) {
        res.status(400).json(ErrorResponse('colour not created', err));
    }
});

router.put('/:id', async function(req, res) {
    try {
        req.body.id = req.params.id; 
        let colour = await colourService.Update(req.body);
        res.status(200).json(SuccessResponse('colour successfully updated', colour));
    } catch (err) {
        res.status(400).json(ErrorResponse('colour not updated', colour));
    }
});

router.delete('/', async function(req, res) {
    try {
        await colourService.Delete(req.params.id);
        res.status(200).json(SuccessResponse('colour successfully deleted'));
    } catch (err) {
        res.status(400).json(ErrorResponse('colour not deleted', err));
    }
});

export default router;

