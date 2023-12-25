import checkUserToken from '../middleware/check-token';
import  balanceControllerer  from '../controllers/BalanceController';
import { Router } from 'express';
const routerBalance = Router();

routerBalance.get('/getBalance', checkUserToken, balanceControllerer.getBalance);
routerBalance.post('/create',checkUserToken, balanceControllerer.CreateBalance);
routerBalance.post('/transfer',checkUserToken, balanceControllerer.Transfer);
routerBalance.post('/deposit',checkUserToken, balanceControllerer.DepositValue);
routerBalance.post('/payment', checkUserToken, balanceControllerer.payment);


export default routerBalance;