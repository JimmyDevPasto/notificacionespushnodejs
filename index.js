import dotenv from 'dotenv';
import express from 'express'
import morgan from 'morgan'
import index from './routes/index.js'
import path from 'path'
import { fileURLToPath } from 'url';


dotenv.config()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app= express()

//middleware 
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//router 

app.use(index)

//static content
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000); 
console.log('Server listening');