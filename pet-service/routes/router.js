import { Router } from "express";
import PetRouter from "./pets";
import BreedRouter from "./breeds";
import BreedTypeRouter from "./breedType";
import GenderRouter from "./genders";
import ColourRouter from "./colours";

const router = Router();

router.use('/breeds', BreedRouter);
router.use('/breed-types', BreedTypeRouter);
router.use('/genders', GenderRouter);
router.use('/colours', ColourRouter);
router.use('/', PetRouter);

export default router;