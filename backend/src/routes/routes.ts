import { Router } from 'express';
import EleitorController from '../controllers/EleitorController';
import Eleitor from '../model/Eleitor';
import EleitorRepository from '../repository/userRepository';

const router = Router();

router.post('/eleitores', EleitorController.create)
router.get('/eleitores', EleitorController.find)
export default router;