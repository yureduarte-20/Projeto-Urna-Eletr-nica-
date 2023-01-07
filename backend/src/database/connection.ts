import knex from "knex";
const connection = knex({
    client:'sqlite3',
    connection:{
        filename:'src/database/db.sqlite3'
    },
    migrations:{
        directory: '../migrations'
    }
})

export default connection