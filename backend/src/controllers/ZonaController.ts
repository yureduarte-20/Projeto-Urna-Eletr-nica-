import { Request, Response } from "express";
import ZonaRepository from "../repository/ZonaRepository";

export default class ZonaController {
    public static async create(req: Request, res: Response) {
        const { nome, tipo, secoes } = req.body
        const id = await ZonaRepository.save({ nome, tipo, secoes });
        return res.json(id)
    }
    public static async find(req: Request, res: Response) {
        const zonas = await ZonaRepository.getWithSection()
        res.json(zonas)
    }
}