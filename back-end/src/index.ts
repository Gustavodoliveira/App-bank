import 'dotenv/config';
import  Express  from 'express';
import { conn } from './db/conn';
import cors from 'cors';
import helmet from 'helmet';

// = > MODELS
import { balanceModel  }from './models/Balance';
import { Users } from './models/User';



const Balance = balanceModel;
const user = Users;



import UserRoutes from './routes/UserRoutes';
import  path from 'path';
import { balanceController } from './controllers/BalanceController';
import routerBalance from './routes/BalanceRoutes';


const app = Express();
app.use('/public', Express.static(path.resolve(__dirname, './public')));


app.use(cors());

app.use(Express.urlencoded({extended: true}));
app.use(Express.json());

app.use(helmet());

app.use('/user', UserRoutes);
app.use('/balance', routerBalance);


conn.sync()
	.then(() => {
		console.log('connect');
		app.listen(`${process.env.port}`);
	})
	.catch((err: void) => console.log(err));

