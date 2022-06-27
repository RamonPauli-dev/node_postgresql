const db = require('./db-config');

async function dropTables() {
    await db.connect()
    await db.query('DROP TABLE evento CASCADE')
    await db.query('DROP TABLE participante CASCADE')
    await db.query('DROP TABLE evento_participante CASCADE')
    await db.end()

    console.log("tabelas removidas");
}

dropTables();