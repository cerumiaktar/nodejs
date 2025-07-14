import express, { Request, Response } from "express"
import fs from "fs"
import path from "path"
// const todosRouter = express.Router()

const filePath = path.join(__dirname, "../../../db/todo.json")

export const todosRouter = express.Router()

todosRouter.get('/', (req: Request, res: Response) => {
    console.log(req.query);
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });

    console.log(" data from todos router");
    res.json({
        message:"From Todos touter",
        data
    })
})

todosRouter.post('/create-todo', (req: Request, res: Response) => {
    const {title, body} = req.body;
    console.log(title, body);
    res.send('Create Todo from todos router')
})

todosRouter.get("/:title", (req: Request, res: Response) => {
    const {title, body} = req.body;
    console.log(title, body);
    res.send('Create Todo from todos router')
})
todosRouter.put("/update-todo/:title", (req: Request, res: Response) => {
    const {title, body} = req.body;
    console.log(title, body);
    res.send('Create Todo from todos router')
})
todosRouter.delete("/delete-todo/:title",(req: Request, res: Response) => {
    const {title, body} = req.body;
    console.log(title, body);
    res.send('Create Todo from todos router')
})