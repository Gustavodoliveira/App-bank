import 'dotenv/config';
import { Sequelize } from 'sequelize';

export const conn = new Sequelize('app-bank', 'root',`${process.env.passwordSql}`, {
	host: 'localhost',
	dialect: 'mysql'
} );

