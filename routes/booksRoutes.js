import * as db from "../data/books.js"
import express from "express"

const router = express.Router()

router.get("/", (req, res)=>{
    const books = db.getAllBooks()
    res.status(200).json(books)
})

router.get("/:id", (req, res)=>{
    let id = +req.params.id
    const book = db.getOneBook(id)
    if(!book){
        return res.status(404).json({message: "Not found/exists."})
    }
    res.status(200).json(book)
})

router.post("/", (req, res)=>{
    let {title, author, year} = req.body
    if(!title || !author || !year){
        return res.status(400).json({message: "Missing data."})
    }
    const saved = db.PostBook(title, author, year)
    const book = db.getOneBook(saved.lastInsertRowid)
    res.status(201).json(book)
})

router.put("/:id", (req, res)=>{
    let id = +req.params.id
    let selected = db.getOneBook(id)
    if(!selected){
        return res.status(404).json({message: "Not found/exists."})
    }
    let {title, author, year} = req.body
    db.UpdateBook(id, title || selected.title, author || selected.author, year || selected.year)
    const book = db.getOneBook(id)
    res.status(200).json(book)
})

router.delete("/:id", (req, res)=>{
    let id = +req.params.id
    const book = db.getOneBook(id)
    if(!book){
        return res.status(404).json({message: "Not found/exists."})
    }
    db.deleteBook(id)
    res.status(200).json({message: "Succesfully deleted"})
})

export default router