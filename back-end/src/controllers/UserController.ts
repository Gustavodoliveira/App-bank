/* eslint-disable @typescript-eslint/no-unused-vars */
import { Users } from '../models/User';
import {Response, Request} from 'express';
import bcrypt  from 'bcrypt';
import createUserToken from '../helpers/create-user-token';



export default class UserController {
	static async  registerUser(req: Request, res: Response) {

		const {name, email, cpf, age, address, phone, password, confirmPassword} = req.body;

		if (!name) return  res.status(401).json({message: 'Name is required'});

		if (!email) return  res.status(401).json({message: 'email is required'});

		if (!cpf) return res.status(401).json({message: 'cpf is required'});

		if (!age) return  res.status(401).json({message: 'age is required'});

		if (!address) return res.status(401).json({message: 'address is required'});

		if (!phone) return res.status(401).json({message: 'phone is required'});

		if (!password) return res.status(401).json({message: 'password is required'});

		if (!confirmPassword) return res.status(401).json({message: 'confirm password is required'});

		if ( password !== confirmPassword) return res.status(401).json({message: 'confirm password different a password'});

		const salt = await bcrypt.genSalt(12);
		const passwordHash = await bcrypt.hash(password, salt);

		try {
			const user = await Users.create({
				name: name,
				email: email,
				cpf: cpf,
				age: age,
				address: address,
				phone: phone,
				password: passwordHash
			});

			await createUserToken(user, req, res);
		} catch (error) {
			return res.status(500).json({message: 'Error in server'});
		}

	}
}