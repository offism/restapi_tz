import express from 'express'
import UserController from '../controller/UserController.js'

const router = express.Router()

router.post('/check-phone' , UserController.checkUser,async (req, res)=>{
   res.send('salom')
})

export default {
	path:"/user",
	router:router
}