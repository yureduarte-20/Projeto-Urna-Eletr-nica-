import { Request, Response } from 'express'
import SecaoRepository from '../repository/SecaoRepository';
export default class SecaoController {
    public static async create(req: Request, res: Response) {
        const { nome, tipo, zona_id } = req.body
        const id = await SecaoRepository.save({ nome, tipo, zona_id });
        return res.json(id)
    }
   public static async find(req : Request, res : Response){
        return res.json(await SecaoRepository.get())
   }
}