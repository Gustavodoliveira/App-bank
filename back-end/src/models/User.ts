import { DataTypes } from 'sequelize';
import { conn } from '../db/conn';

export const User = conn.define('User', {
	name:{
		type: DataTypes.STRING
	},
	profision:{
		type: DataTypes.STRING,
	},
	cpf:{
		type: DataTypes.STRING
	},
	age:{
		type: DataTypes.NUMBER
	},
	phone:{
		type: DataTypes.STRING
	},
	balance:{
		type: DataTypes.FLOAT
	},
	password:{
		type: DataTypes.STRING
	},
});
module.exports = User;