import  express from 'express'
import dotenv  from 'dotenv'
import Connection from './database/db.js'
import Routes from './router/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()


// config vadu baaki databse name and password
dotenv.config();

// body Parser
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({ extended: false }))

// cors 2differt server mate 
app.use(cors())

// roters 
app.use('/' , Routes)
 
Connection();


const PORT = 8000
app.listen(PORT, () =>{
        console.log(`Server is working on http://localhost:${PORT}`)
    })
    