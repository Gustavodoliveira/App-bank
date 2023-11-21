import {  DataTypes, InferAttributes, InferCreationAttributes, Model} from 'sequelize';
import { conn } from '../db/conn';
import { Users } from './User';


interface balanceModel extends Model<InferAttributes<balanceModel>, InferCreationAttributes<balanceModel>> {
    balance: number,
    userId: number
}

export const balanceModel = conn.define<balanceModel>('balance', {
	balance: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	userId: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
		references: {
			model: 'users',
			key: 'id'
		}
	}

});

//balanceModel.belongsTo(Users);
