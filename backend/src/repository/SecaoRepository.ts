import connection from "../database/connection"
import { SECOES_TABLE } from "../migrations/20230107213735_secoes_migration"
import Secao from "../model/Secao"

export default class SecaoRepository {
    public static async save({ nome, tipo, zona_id }: Secao): Promise<{ id: number }> {
        return new Promise((res, rej) => {
            connection(SECOES_TABLE).insert({ nome, tipo,zona_id  })
                .then(data => res({ id: data[0] }))
                .catch(rej)
        })
    }
    public static async get(where?: string): Promise<Secao[]> {
        if (where)
            return connection(SECOES_TABLE).select<Secao[]>('*').where(where)
        return connection(SECOES_TABLE).select<Secao[]>('*')
    }
}