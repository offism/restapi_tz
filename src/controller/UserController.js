import phoneValidation from '../validations/phoneValidation.js'
class UserController{
	static async  checkUser(req,res){

       try {
       	const data = await phoneValidation.validateAsync(req.body)
       	let user = await req.postgres.users.findOne({
       		where:{
              phone: data.phone
       		}
       	})

if(user) {
	res.status(200).json({
		"ok":true,
		"exist": user ? true : false
	})
}

       } catch(e) {
            res.status(400).json({
            	message: e+ ''
            })
       }
	}
}
export default  UserController 