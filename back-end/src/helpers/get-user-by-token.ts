import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { Users } from '../models/User';





const getUserByToken = async (token: string ) => {

	const decoded = jwt.verify(token, `${process.env.jwtSecret}` );
	const id  = decoded.user;


	try {
		const user = await Users.findOne({where: {id: id}}) ;
		if(!user) return;
		return user;
	} catch (error) {
		return'user not exits';
	}
};

export default getUserByToken;