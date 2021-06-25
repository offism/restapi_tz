import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import http from 'http'
import config from './config.js'
import postgres from './modules/postgres.js'
import routes from './routes/routes.js'


async function main(){
let db = await postgres() 

let {PG_CONNECTION_STRING} = config

let __dirname = path.resolve(path.dirname(''))
const app = express()
const server = http.createServer(app)
server.listen(80 , ()=> console.log('HTTP server is ready'))
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(async (req , res, next)=>{
	req.postgres = db
	next()
})

routes(app)

}

main()