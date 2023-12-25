
import { Request, Response } from 'express';
import { balanceModel } from '../models/Balance';
import { Users } from '../models/User';
import getToken from '../helpers/get-token';
import getUserByToken from '../helpers/get-user-by-token';
import { userModel } from '../models/User';
import { FLOAT } from 'sequelize';

export default class balanceController {

	static async CreateBalance(req: Request, res: Response) {
		const UserId = req.body;
		console.log(JSON.stringify(UserId));





		const value = 10;




		const userModel = await Users.findOne({ where: { id: UserId?.id } });
		const balanceUserId = await balanceModel.findOne({ where: { userId: UserId?.id } });

		if (!userModel) return res.status(401).json({ message: 'you are not user' });


		if (balanceUserId) return res.status(401).json({ message: 'Account already exists' });



		try {
			const Balance = await balanceModel.create({
				balance: value,
				userId: UserId?.id,
			});

			return res.status(200).json({ message: 'your deposit was made successfully' });
		} catch (error) {
			return res.status(500).json({ message: 'we are having server problems' });

		}


	}

	static async DepositValue(req: Request, res: Response) {
		const { userId, Amount } = req.body;

		if (!Amount) res.status(400).json({ message: 'We need amount value' });

		console.log(userId);


		const userBalance = await balanceModel.findOne({ where: { userId: userId } });

		if (!userBalance) return res.status(400).json({ message: 'you don`t have an account' });

		let balanceValue = userBalance?.balance;

		balanceValue = balanceValue + Number.parseFloat(Amount);

		try {
			userBalance.update({
				balance: balanceValue
			}, { where: { userId: userId } });

			return res.status(200).json({ message: 'success deposit value' });

		} catch (error) {
			console.log(error);

		}
	}

	static async getBalance(req: Request, res: Response) {
		const token = getToken(req);

		if (!token) return res.status(400).json({ message: 'you are not authenticated' });

		const userId = await getUserByToken(token);

		if (!userId) return;
		let valueBalance = 0;

		const idUser = await balanceModel.findOne({ where: { userId: userId } });

		if (!idUser) return res.status(204).json({ valueBalance });


		valueBalance = idUser.balance;



		return res.status(200).json({ valueBalance });


	}

	static async payment(req: Request, res: Response) {
		const { AccountName, value, id } = req.body;

		const user = await Users.findOne({ where: { id: id } });

		if (!user) return res.status(401).json({ message: 'user not exists' });


		if (!AccountName) return res.status(401).json({ message: 'account name is required to do payment!' });

		if (!value) return res.status(401).json({ message: 'the value is required to do payment!' });

		const balance = await balanceModel.findOne({ where: { userId: user.id } });

		if (!balance) return res.status(401).json({ message: 'you need to do a deposit ' });

		if (balance.balance < value) return res.status(303).json({ message: 'you balance value insufficient' });

		const newBalance = balance.balance - Number.parseFloat(value);

		try {
			const balanceNew = await balance.update({
				balance: newBalance,
			});

			return res.status(200).json({ message: `your new balance ${balanceNew.balance}`});
		} catch (error) {
			return res.status(500).json({ message: 'we are having server problems' });
		}
	}

	static async Transfer (req: Request, res: Response) {
		const { cpf, value } = req.body;
		const token = getToken(req);

		if(!token) return res.status(400).json({message: 'you don`t have token'});

		const userSend = await getUserByToken(token);

		if(!userSend)  return res.status(400).json({message: 'you are not user'});

		const balanceSend = await balanceModel.findOne({where: { userId: userSend}});

		if(!balanceSend) return res.status(400).json({ message: 'The send not exist'});

		if(balanceSend?.balance < Number.parseFloat(value)) return res.status(401).json({message: 'The send does not have enough money'});

		if(!balanceSend) return res.status(401).json({message: 'you don`t have an account created'});

		if(!cpf) return res.status(401).json({ message: 'The owner cpf transfer is required'});

		if(!value) return res.status(401).json({ message: 'The value transfer is required'});

		const userReceive = await Users.findOne({where: {cpf: cpf}});

		if(!userReceive) return  res.status(401).json({ message: 'The cpf is invalid'});


		const balanceReceive = await balanceModel.findOne({where: { userId: userReceive?.id}});

		if(!balanceReceive) return res.status(401).json({ message: 'You dont`t have an  account created'});

		try {
			const newBalanceSend = balanceSend.balance - Number.parseFloat(value);
			const newBalanceReceive = balanceReceive.balance + Number.parseFloat(value);
			console.log(newBalanceReceive, newBalanceSend);

		} catch (error) {
			console.log(error);

		}

	}
}