import 'dotenv/config';
import { Request, Response } from 'express';
import  Jwt  from 'jsonwebtoken';
import { Model } from 'sequelize';
import { userModel } from 'src/models/User';

const createUserToken = async (user: userModel, req: Request, res: Response) => {

	const token = Jwt.sign({
		user: user
	}, `${process.env.jwtSecret}`);

	res.status(200).json({
		message: 'you are authenticated',
		token,
		user: user
	});
};

export default createUserToken;