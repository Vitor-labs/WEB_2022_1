import StudentsController from "../controls/student";
import { Router } from "express";

const studentRouter = Router()

studentRouter.get('/list', StudentsController.findAll)
studentRouter.post('/create', StudentsController.create)
studentRouter.get('/find/:id', StudentsController.findByPk)
studentRouter.delete('/delete/:id', StudentsController.destroy)
studentRouter.put('/update/:id', StudentsController.update)


export default studentRouter