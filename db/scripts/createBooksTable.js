import query from "../index.js";


const sqlString = 'CREATE TABLE IF NOT EXISTS books(bookid SERIAL PRIMARY KEY, title TEXT, author TEXT)'

async function createBookTable(){
    const res = await query(sqlString)
    console.log("Table created", res.rows)
}

const alo = process.env.PGUSER

console.log(alo)
//createBookTable()