// const express = require('express')
import express, { Application, Request, Response } from 'express'
import { todosRouter } from './app/todos/todos.routes';
const app: Application = express()


app.use(express.json());


const userRouter = express.Router()

app.use("/todos", todosRouter)
app.use("/users", userRouter)


app.get('/', (req: Request, res: Response) => {
    // console.log({req, res});
    res.send('Welcome to todos app')
})





export default app;
