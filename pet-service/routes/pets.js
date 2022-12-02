import { Router } from 'express';
import ErrorResponse from '../response/error-response';
import SuccessResponse from '../response/success-response';
import petService from '../service/pets';

var router = Router();

/* GET users listing. */
router.get('/', async function(req, res) {
    try {
        let pets = await petService.GetAllPets(req.query.limit, req.query.customer_id);
        res.status(200).json(SuccessResponse('pets successfully fetched', pets));
    }catch (err) {
        res.status(400).json(ErrorResponse('pets fetch failed', err));
    }
});

router.get('/:id', async function(req, res) {
    try {
        let pet = await petService.GetPet(req.params.id);
        res.status(200).json(SuccessResponse('pet successfully fetched', pet));
    }catch (err) {
        res.status(400).json(ErrorResponse('pet not found', err));
    }
});

router.post('/', async function(req, res){
    try {
        let pet = await petService.CreatePet(req.body);
        res.status(201).json(SuccessResponse('Pet successfully created', pet));
    } catch(err) {
        res.status(400).json(ErrorResponse('pet not created', err));
    }    
});

router.delete('/:id', async function(req, res){
    try {
        await petService.DeletePet(req.params.id);
        res.status(200).json(SuccessResponse('pet deleted successfully.', null));
    }catch(err) {
        res.status(400).json(ErrorResponse('pet not deleted', err));
    }
});

router.put('/:id', async function(req, res){
    try {
        req.body.id = req.params.id
        let pet = await petService.UpdatePet(req.body);
        res.status(200).json(SuccessResponse('pet updated successfully.', pet));
    } catch(err) {
        res.status(400).json(ErrorResponse('pet not updated', err));
    }
});

export default router;
