import express from 'express'
import UserController from '../controller/UserController.js'
const router = express.Router()

router.get('/' ,UserController.checkUser,async (req, res)=>{
   res.send('salom')
})

router.post('/' , (req,res)=>{
res.send("alik")
})

export default {
	path:"/",
	router:router
}