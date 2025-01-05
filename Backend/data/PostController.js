import fs from "fs/promises"
import path from "path"

class PostController {
    async getAll (req,res) {
        try {
            const dataPath = path.resolve("data/json/data.json")
            const data = await fs.readFile(dataPath)
            const resultJson = JSON.parse(data)
            res.json(resultJson)
        } catch (e) {
            console.log(e)            
        }
    }

    async getAllSlide (req,res) {
        try {
            const dataPath = path.resolve("data/json/slide-info.json")
            const data = await fs.readFile(dataPath)
            const resultJson = JSON.parse(data)
            return res.json(resultJson)
        } catch (e) {
            console.log(e)
        }
    }

    async getNavInfo (req,res) {
        try {
            const dataPath = path.resolve("data/json/selectionWindow-data.json")
            const data = await fs.readFile(dataPath)
            const resultJson = JSON.parse(data)
            return res.json(resultJson)
        } catch {
            console.log(e)
        }
    }
}

export default new PostController()