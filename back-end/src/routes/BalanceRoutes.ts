import checkUserToken from '../middleware/check-token';
import  balanceControllerer  from '../controllers/BalanceController';
import { Router } from 'express';
const routerBalance = Router();

routerBalance.get('/getBalance', checkUserToken, balanceControllerer.getBalance);
routerBalance.post('/deposit',checkUserToken, balanceControllerer.getDepositValueBalance);


export default routerBalance;