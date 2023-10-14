import { DataTypes } from 'sequelize';
import { conn } from '../db/conn';

export const Users = conn.define('users', {
	name:{
		type: DataTypes.STRING
	},
	cpf:{
		type: DataTypes.STRING
	},
	age:{
		type: DataTypes.STRING
	},
	phone:{
		type: DataTypes.STRING
	},
	password:{
		type: DataTypes.STRING
	}
});
module.exports = Users;