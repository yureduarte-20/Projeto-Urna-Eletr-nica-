import { Knex } from "knex";

export const ZONAS_TABLES = 'zonas'
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(ZONAS_TABLES, table =>{
        table.increments('id').primary();
        table.string('nome').notNullable()
        table.string('tipo').notNullable()
        table.timestamps({ defaultToNow: true })
    })
}


export async function down(knex: Knex): Promise<void> {
}

