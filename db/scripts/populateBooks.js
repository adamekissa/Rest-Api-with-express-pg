import query from "../index.js";


const sqlString = "INSERT INTO books(title, author) VALUES ('Adventure Village', 'Stephen Macca') RETURNING *"

async function populateBooks(){
    const res = await query(sqlString)
    console.log("Row Inserted", res.rows)
}

populateBooks()