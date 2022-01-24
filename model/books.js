import query from "../db/index.js";

export async function getAllBooks(){
    const books = await query("SELECT * FROM bookS")
    return books.rows
}


export async function getBookById(id){
    const res = await query("SELECT * FROM books WHERE bookid = $1", [id])
    return res.rows
    console.log("success", res.rows)
}

export async function insertBook(title, author){
    const res = await query("INSERT INTO books(title, author) VALUES ($1, $2) RETURNING *", [title, author])
    return res.rows
}

export async function deleteBook(id){
    const res = await query("DELETE FROM books WHERE bookid = $1 RETURNING *", [id])
    return res.rows
}