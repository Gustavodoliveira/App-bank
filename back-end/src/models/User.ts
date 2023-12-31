import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { conn } from '../db/conn';

export interface userModel extends Model<InferAttributes<userModel>, InferCreationAttributes<userModel>> {
    id: string,
    name: string,
    email: string,
    image: string,
    cpf: string,
    age:string,
    address: string,
    phone: string,
    password: string
}

export const Users = conn.define<userModel>('users', {
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
		unique: true
	},
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
		type: DataTypes.STRING(14),
		allowNull: false,
		unique: true
	},
	age:{
		type: DataTypes.STRING,
		allowNull: false
	},
	address:{
		type: DataTypes.STRING,
		allowNull: false
	},
	phone:{
		type: DataTypes.STRING(16),
		allowNull: false
	},
	password:{
		type: DataTypes.STRING,
		allowNull: false
	}
});