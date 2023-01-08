import knex from "knex";
import connection from "../database/connection";
import { ZONAS_TABLES } from "../migrations/20230107213717_zonas_migration";
import { SECOES_TABLE } from "../migrations/20230107213735_secoes_migration";
import Secao from "../model/Secao";
import Zona from "../model/Zona";
import SecaoRepository from "./SecaoRepository";

export default class ZonaRepository {
    public static async save({ nome, tipo, secoes }: Zona): Promise<Zona> {
        return new Promise(async (res, rej) => {
            const [zona_id] = await connection(ZONAS_TABLES).insert({ nome, tipo })
            if(secoes){
                for(let secao of secoes){
                    secao.zona_id = zona_id
                }
                SecaoRepository.saveMany(secoes).then(() =>{ res({ id: zona_id, nome, tipo, secoes }) }).catch(rej)
            }
        })
    }

    public static async get(where?: string): Promise<Zona[]> {
        if (where)
            return connection(ZONAS_TABLES).select<Zona[]>('*').where(where)
        return connection(ZONAS_TABLES).select<Zona[]>('*')
    }
    public static async getWithSection(where?: string): Promise<any[]> {
        if (where) {
            const zonas = await connection(ZONAS_TABLES).select<Zona[]>('*').where(where)
            for (let zona of zonas) {
                zona.secoes = await connection(SECOES_TABLE).select('*').where('zona_id', zona.id)
            }
            return zonas
        }
        let zonas: any[] = await connection.select<Zona[]>('*').from(ZONAS_TABLES)
        for (let zona of zonas) {
            zona.secoes = await connection(SECOES_TABLE).select('*').where('zona_id', zona.id)
        }
        return zonas
    }

}