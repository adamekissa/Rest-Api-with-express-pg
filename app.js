import express, { query } from "express"
import { deleteBook, getAllBooks, getBookById, insertBook } from "./model/books.js"
const PORT = 3000

const app = express()

app.use(express.json());



app.use( function(req, res, next){
    console.log("Welcome to my App")
    next()
})

app.get("/", function(req, res){
    res.json({Messa: "We are here"})
})

app.get("/books", async function(req, res){
    const payload = await getAllBooks()
    res.json(payload)
})

app.get("/books/:id", async function(req, res){
    const id = req.params.id
    const payload = await getBookById(id)
    res.json(payload)
})

app.post("/books", async function(req, res){
    const title = req.body.title
    const author = req.body.author
    const book = await insertBook(title, author)
    res.json({message: "Added", book})
})

app.delete("/books/:id", async function(req, res){
    const id = req.params.id
    const payload = await deleteBook(id)
    res.json({message: "Book deleted", payload})
})

app.listen(PORT, function(req, res){
    console.log("Up and listening on Port 300")
})