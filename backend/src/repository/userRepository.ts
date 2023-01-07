import Eleitor from "../model/Eleitor";
import { readFile, writeFile } from 'fs'
export const DATABASE_PATH = 'src/database/db.json'
import connection from "../database/connection";
import { ELEITOR_TABLE } from "../migrations/20230107193039_eleitor_migration";
export default class EleitorRepository {

    public static async save(user: Eleitor) {
        return new Promise((resolve, reject) => {
            const { nome, senha, titulo } = user;
            connection(ELEITOR_TABLE).insert<Eleitor>({ nome, senha, titulo })
                .then(resolve)
                .catch(err =>{
                    console.error(err)
                    reject(err)
                })
        })
    }
    public static async get(whereCondition?: string): Promise<Eleitor[]> {
        return new Promise((resolve, reject) => {
            if (whereCondition) {
                return connection(ELEITOR_TABLE).select<Eleitor[]>('*').where(whereCondition).then(resolve).catch(reject)
            }
            connection(ELEITOR_TABLE).select<Eleitor[]>('*').then(resolve).catch(reject)
        })
    }
}