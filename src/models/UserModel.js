export default async (Sequelize , sequelize)=>{
	return await sequelize.define('users' , {
		id:{
			type: Sequelize.DataTypes.UUID,
			primaryKey:true,
			defaultValue: Sequelize.UUIDV4
		},
		name:{
		type: Sequelize.DataTypes.STRING(64),
			primaryKey:false,
		},
		email:{
		   type: Sequelize.DataTypes.STRING(64),
			unique:true,
   is: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		},
		phone: {
            type: Sequelize.DataTypes.STRING(64),
            is: /^998[0123456789][0-9]{7}$/,
            allowNull:false,
            unique:true   
         },
         bdate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false
         },
         gender:{
         	type:Sequelize.DataTypes.ENUM,
         	values:["male" , "female"],
         	allowNull:false
         }
	})
}