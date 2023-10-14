import 'dotenv/config';
import { Request, Response } from 'express';
import  Jwt  from 'jsonwebtoken';
import { Model } from 'sequelize';

const createUserToken = async (user: Model, req: Request, res: Response) => {

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