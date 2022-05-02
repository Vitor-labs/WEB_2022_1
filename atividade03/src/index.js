import express, { json } from 'express'
import env from 'dotenv'
import root from './routes/index'
import cors from 'cors'

import studentRouter from './routes/StudentsRoutes'
import professorRouter from './routes/ProfessorsRoutes'

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

env.config()

const PORT = process.env.SERVER_PORT
const app = express()

app.use(json())
//app.use(mainRouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


//app.use('/api/v1/users', users);
app.use('/crud/students', studentRouter)
app.use('/crud/professors', professorRouter)

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})