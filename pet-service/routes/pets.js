import { Router } from 'express';
import petService from '../service/pets';

var router = Router();

/* GET users listing. */
router.get('/', async function(req, res) {
    try {
        let pets = await petService.GetAllPets(req.query.limit, req.query.customer_id);
        res.status(200).json(pets);
    }catch (err) {
        res.status(400).json({'error' : err});
    }
});

router.get('/:id', async function(req, res) {
    try {
        let pet = await petService.GetPet(req.params.id);
        res.status(200).json(pet);
    }catch (err) {
        res.status(400).json({'error' : err});
    }
});

router.post('/', async function(req, res){
    try {
        let pet = await petService.CreatePet(req.body);
        res.status(201).json(pet);
    } catch(err) {
        res.status(400).json({error : err});
    }    
});

router.delete('/:id', async function(req, res){
    try {
        await petService.DeletePet(req.params.id);
        res.status(200).json({message : "pet deleted successfully."});
    }catch(err) {
        res.status(400).json({error: err});
    }
});

router.put('/:id', async function(req, res){
    try {
        req.body.id = req.params.id
        let pet = await petService.UpdatePet(req.body);
        res.status(200).json(pet);
    } catch(err) {
        res.status(400).json({error: err});
    }
});

export default router;
