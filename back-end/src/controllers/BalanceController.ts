
import { Request, Response } from 'express';
import { balanceModel } from '../models/Balance';
import { Users } from '../models/User';

export default class balanceController {

	static async CreateBalance (req: Request, res: Response) {
		const balanceValue = req.body;
		const {userId} = req.body;




		const value = Number.parseInt(balanceValue || 0);




		const user = await Users.findOne({where: {id: userId}});
		const balanceUserId = await balanceModel.findOne({ where: { userId: userId}});

		if(!user) return res.status(401).json({message: 'you are not user'});


		if(balanceUserId) return res.status(401).json({message: 'Account already exists'});



		try {
			const Balance = await balanceModel.create({
				balance: value,
				userId : id,
			});

			return res.status(200).json({message: 'your deposit was made successfully'});
		} catch (error) {
			return res.status(500).json({ message: 'we are having server problems'});

		}


	}

	static async DepositValue(req:Request, res:Response) {
		const {userId, Amount} = req.body;

		if(!Amount) res.status(400).json({message: 'We need amount value'});

		const userBalance = await balanceModel.findOne({where: {userId: userId}});

		if(!userBalance) return res.status(400).json({message: 'you don`t have an account'});

		let balanceValue = userBalance?.balance;

		balanceValue = balanceValue + Amount;

		try {
			userBalance.update({
				balance: balanceValue
			},{where: {userId: userId}});

			return res.status(200).json({message: 'success deposit value'});

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

		if(balance.balance < value) return res.status(303).json({message: 'you balance value insufficient'});

		const newBalance = balance.balance - value;

		try {
			const balanceNew = await balance.update({
				balance: newBalance,
			});

			return res.status(200).json({ message: `your new balance ${balanceNew}`});
		} catch (error) {
			return res.status(500).json({ message: 'we are having server problems'});

		}


	}
}