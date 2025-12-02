import db from "./db.js"

db.prepare("CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT, year INTEGER)").run()

export const getAllBooks = () => db.prepare("SELECT * FROM books").all()

export const getOneBook = (id) => db.prepare("SELECT * FROM books WHERE id = ?").get(id)

export const PostBook = (title, author, year) => db.prepare("INSERT INTO books (title, author, year) VALUES (?, ?, ?)").run(title, author, year)

export const UpdateBook = (id,title, author, year) => db.prepare("UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?").run(title, author, year,id)

export const deleteBook = (id) => db.prepare("DELETE FROM books WHERE id = ?").run(id)


if(getAllBooks.length == 0){
    PostBook("Gyermek lélektan", "Nemtudom", 1980)
    PostBook("Breath", "Őtsemtudom", 2000)
    PostBook("Pszihoanalízis", "Seőt", 2010)
}



