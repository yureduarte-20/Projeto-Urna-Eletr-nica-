import knex from "knex";
const connection = knex({
    client: 'sqlite3',
    useNullAsDefault: true,
     connection: {
        filename: 'src/database/db.sqlite3'
    },
    migrations: {
        directory: '../migrations'
    }
})

export default connection