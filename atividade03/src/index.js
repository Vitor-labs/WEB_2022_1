import express, { json } from 'express'
import env from 'dotenv'
import root from './routes/index'
import cors from 'cors'

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

env.config()

const PORT = process.env.SERVER_PORT
const app = express()

app.use(json())
app.use('/app', root)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser())
app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})