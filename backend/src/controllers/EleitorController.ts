import EleitorRepository from "../repository/userRepository";
import { Request, Response } from 'express'
import Eleitor from "../model/Eleitor";

export default class EleitorController {
    public static async create(req: Request, res: Response) {
        const { nome, titulo, senha }: Eleitor = req.body
        const [id]: any = await EleitorRepository.save(new Eleitor({ nome, titulo, senha }))
        return res.json({ id })
    }
    public static async find(req: Request, res: Response) {
        let eleitores : Eleitor[] = await EleitorRepository.getWithoutPassword()
        return res.json(eleitores )
    }
}