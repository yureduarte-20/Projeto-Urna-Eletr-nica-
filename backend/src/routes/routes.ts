import { Router } from 'express';
import EleitorController from '../controllers/EleitorController';
import SecaoController from '../controllers/SecaoController';
import ZonaController from '../controllers/ZonaController';
import Eleitor from '../model/Eleitor';
import EleitorRepository from '../repository/userRepository';

const router = Router();

router.post('/eleitores', EleitorController.create)
router.get('/eleitores', EleitorController.find)

router.post('/zonas',ZonaController.create)
router.get('/zonas', ZonaController.find)

router.post('/secoes', SecaoController.create)
router.get('/secoes', SecaoController.find)
export default router;