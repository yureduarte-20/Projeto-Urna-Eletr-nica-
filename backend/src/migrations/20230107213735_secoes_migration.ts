import { Knex } from "knex";
import { ZONAS_TABLES } from "./20230107213717_zonas_migration";

export const SECOES_TABLE = 'secoes'
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(SECOES_TABLE, table =>{
        table.increments('id').primary()
        table.string('nome').notNullable()
        table.string('tipo').notNullable()

        table.integer('zona_id').notNullable()

        table.foreign('zona_id').references(`${ZONAS_TABLES}.id`)
        table.timestamps({ defaultToNow: true })
    })
}


export async function down(knex: Knex): Promise<void> {
}

