
import { Request, Response } from 'express';
import { balanceModel } from '../models/Balance';
import { Users } from 'src/models/User';

export class balanceController {
	static async getValueBalance (req: Request, res: Response) {
		const { balanceValue, userId} = req.body;

		const value = Number.parseInt(balanceValue);
		const id = Number.parseInt(userId);

		if(!balanceValue) return res.status(401).json({message: 'we need a deposit amount'});

		try {
			const Balance = await balanceModel.create({
				balance: value,
				userId : id

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

		if(!userId) return res.status(204).json({valueBalance});

		if (userId) {
			valueBalance = idUser.balance;
		}



		return res.status(200).json({valueBalance});


	}
}