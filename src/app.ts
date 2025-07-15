// const express = require('express')
import express, { Application, NextFunction, Request, Response } from 'express'
import { todosRouter } from './app/todos/todos.routes';
const app: Application = express()


app.use(express.json());


const userRouter = express.Router()

app.use("/todos", todosRouter)
app.use("/users", userRouter)


app.get('/', (req: Request, res: Response,  next: NextFunction) => {
    console.log("i am custom middleware");
    next();
    // res.send('Welcome to todos app')

},(req: Request, res: Response) => {
    res.send('Welcome to todos app')
})





export default app;
