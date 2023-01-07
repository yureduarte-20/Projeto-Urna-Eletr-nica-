import { Router } from 'express';
import Eleitor from '../model/Eleitor';
import EleitorRepository from '../repository/userRepository';

const router = Router();

router.post('/eleitores', (req, res) => {
    const { titulo, senha, nome } = req.body
    const user = new Eleitor({ titulo, senha, nome })
    EleitorRepository.save(user)
        .then((data) => { res.json({ message: data }) })
        .catch(data => res.status(422).json({ message: data }))
})
router.get('/eleitores', (req, res) => {
    EleitorRepository.get()
        .then((data: any) => {
            data.forEach((element : any) => {
                delete element._password
            });
            res.json({ users: data })
        })
        .catch(reason => res.status(500).json({ message: reason }))
})
export default router;