import { fileURLToPath } from "url"
import express from "express"
import router from "./Router.js"
import path, { dirname } from "path"
import cors from "cors"

const app = express()

const PORT = process.env.PORT || 3001

const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)

app.use(cors())
app.use(express.json())
app.use("/api", router)
app.use("/images", express.static(path.join(__dirname, '../images')));

const startApp = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

startApp()
