import express from "express"
import router from "./routes/booksRoutes.js"

const PORT = 3010
const app = express()

app.use(express.json())
app.use("/api/books", router)

app.listen(PORT, ()=>{
    console.log(PORT)
})