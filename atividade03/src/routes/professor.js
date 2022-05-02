import ProfessorsController from "../controls/professor";
import { Router } from "express";

const professorRouter = Router()

professorRouter.get('/list', ProfessorsController.findAll)
professorRouter.post('/create', ProfessorsController.create)
professorRouter.get('/find/:id', ProfessorsController.findByPk)
professorRouter.delete('/delete/:id', ProfessorsController.destroy)
professorRouter.put('/update/:id', ProfessorsController.update)

export default professorRouter