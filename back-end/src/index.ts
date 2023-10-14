/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import  Express  from 'express';
import { conn } from './db/conn';
import cors from 'cors';
import helmet from 'helmet';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Users = require('./models/User');


const app = Express();


app.use(cors());

app.use(Express.urlencoded({extended: true}));

app.use(helmet());


conn.sync()
	.then(() => {
		console.log('connect');
		app.listen(`${process.env.port}`);
	})
	.catch((err: void) => console.log(err));
