const db = require('./db-config');

async function listData() {
    await db.connect();
    var result
    //eventos
    result = await db.query("SELECT * FROM evento");
    console.log("eventos: ");
    console.log(result.rows);

    //eventos
    result = await db.query("SELECT * FROM participante");
    console.log("participante: ");
    console.log(result.rows);
    //eventos
    result = await db.query(`SELECT 
    e.nome AS evento,
    p.nome AS participante
    FROM evento AS e, participante AS p, evento_participante AS ep
    WHERE 
    ep.evento_id =e.id AND
    ep.participante_id = p.id`);
    console.log("eventos com participante: ");
    console.log(result.rows);
    await db.end();
}

listData();