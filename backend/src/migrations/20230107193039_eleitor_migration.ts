import { Knex } from "knex";

export const ELEITOR_TABLE = 'eleitores'
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(ELEITOR_TABLE, table =>{
        table.increments('id').primary();
        table.string('titulo', 12).unique().notNullable();
        table.string('nome', 60).notNullable()
        table.string('senha').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(ELEITOR_TABLE)
}

