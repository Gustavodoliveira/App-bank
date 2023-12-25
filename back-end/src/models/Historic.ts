import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { conn } from 'src/db/conn';


interface HistoricModel extends Model<InferAttributes<HistoricModel>, InferCreationAttributes<HistoricModel>> {
    Account: string,
    value: number,
    UserId: string
}

export const Historic = conn.define<HistoricModel>('Historic',{
	Account: {
		type: DataTypes.STRING,
		allowNull: false,

	},
	value: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	UserId: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
		references: {
			model: 'users',
			key: 'id'
		}
	}
});