import { Router } from "express";
import studentRouter from "./student";
import professorRouter from "./professor";

const root = Router()
root.use("/students", studentRouter)
root.use("/professors", professorRouter)

export default root