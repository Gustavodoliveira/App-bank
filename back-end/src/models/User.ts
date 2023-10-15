import { DataTypes } from 'sequelize';
import { conn } from '../db/conn';

export const Users = conn.define('users', {
	name:{
		type: DataTypes.STRING(30),
		allowNull: false
	},
	email:{
		type: DataTypes.STRING(40),
		allowNull: false
	},
	image:{
		type: DataTypes.STRING,
	},
	cpf:{
		type: DataTypes.STRING(11),
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
		type: DataTypes.STRING(10),
		allowNull: false
	},
	password:{
		type: DataTypes.STRING,
		allowNull: false
	}
});