import 'dotenv/config';
import { Sequelize } from 'sequelize';

export const conn = new Sequelize('bank', 'root',`${process.env.passwordSql}`, {
	host: 'localhost',
	dialect: 'mysql'
} );

