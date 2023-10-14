import { DataTypes } from 'sequelize';
import { conn } from '../db/conn';

export const Users = conn.define('users', {
	name:{
		type: DataTypes.STRING,
		allowNull: false
	},
	email:{
		type: DataTypes.STRING,
		allowNull: false
	},
	cpf:{
		type: DataTypes.STRING,
		allowNull: false
	},
	age:{
		type: DataTypes.INTEGER,
		allowNull: false
	},
	address:{
		type: DataTypes.STRING,
		allowNull: false
	},
	phone:{
		type: DataTypes.STRING,
		allowNull: false
	},
	password:{
		type: DataTypes.STRING,
		allowNull: false
	}
});