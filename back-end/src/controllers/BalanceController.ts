
import { Request, Response } from 'express';
import { balanceModel } from '../models/Balance';
import { Users } from '../models/User';
import getUserByToken from '../helpers/get-user-by-token';
import getToken from '../helpers/get-token';

export default class balanceController {
	static async getDepositValueBalance (req: Request, res: Response) {
		const { balanceValue, userId } = req.body;

		const value = Number.parseInt(balanceValue);
		const id: string = userId ;




		const user = await Users.findOne({where: {id: id }});
		const balanceUserId = await balanceModel.findOne({ where: { userId: id}});

		if(!user) return res.status(401).json({message: 'you are not user'});


		if(!balanceValue) return res.status(401).json({message: 'we need a deposit amount'});



		try {
			const Balance = await balanceModel.create({
				balance: value,
				userId : id,
			});

			return res.status(200).json({message: 'your deposit was made successfully'});
		} catch (error) {
			console.log(error);

		}


	}

	static async getBalance (req: Request, res:Response) {
		const {userId }= req.body;
		let  valueBalance = 0;

		const idUser = await balanceModel.findOne({where: {userId: userId}}) ;

		if(!idUser) return res.status(204).json({valueBalance});


		valueBalance = idUser.balance;



		return res.status(200).json({valueBalance});


	}

	static async payment(req: Request, res: Response) {
		const { accountName, value, id} = req.body;

		const user = await Users.findOne({ where: { id: id}});

		if(!user) return res.status(401).json({message: 'user not exists'});


		if(!accountName) return res.status(401).json({ message: 'account name is required to do payment!'});

		if(!value) return res.status(401).json({ message: 'the value is required to do payment!'});

		const balance = await balanceModel.findOne({where: {userId: user.id}});

		if(!balance) return res.status(401).json({message: 'you need to do a deposit '});

		const newBalance = balance.balance - value;

		try {
			const balanceNew = await balance.update({
				balance: newBalance,
			});

			return res.status(200).json({ message: balanceNew});
		} catch (error) {
			console.log(error);

		}


	}
}