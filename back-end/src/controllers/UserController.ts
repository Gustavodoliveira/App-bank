/* eslint-disable @typescript-eslint/no-unused-vars */
import { Users } from '../models/User';
import {Response, Request} from 'express';
import bcrypt  from 'bcrypt';
import {v4} from 'uuid';



import createUserToken from '../helpers/create-user-token';
import getUserByToken from '../helpers/get-user-by-token';
import getToken from '../helpers/get-token';



export default class UserController {
	static async showUsers (req: Request, res: Response) {
		const users = await Users.findAll();

		return res.status(200).json({ message: users});
	}


	static async getUserById(req: Request, res: Response) {
		const { id }= req.params;

		const token = getToken(req);
		const user= await getUserByToken(token || '');

		if(!user) return res.status(401).json({message: 'user not exists'});

		if( user.id != id) return res.status(400).json({message: 'this is users is differents'});

		try {
			const user = await Users.findOne({where: { id: id }});
			return res.status(200).json({user});
		} catch (error) {
			return res.status(500).json({error});
		}

	}

	static async  registerUser(req: Request, res: Response) {

		const {name, email, cpf, age, address, phone, password, confirmPassword} = req.body;

		let image = '';

		if (req.file) {
			image = req.file.filename;
		}

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
			const id = v4();

			const userExists = await Users.findOne({where:{
				email: email
			}});

			if(userExists) return res.status(401).json({message: 'User already exist'});

			const user = await Users.create({
				id: id,
				name: name,
				email: email,
				image: image,
				cpf: cpf,
				age: age,
				address: address,
				phone: phone,
				password: passwordHash
			});

			await createUserToken(user, req, res);
		} catch (error) {
			console.log(error);

			return res.status(500).json({message: 'Error in server'});
		}

	}

	static async userLogin(req: Request, res:Response) {
		const {email, password} = req.body;
		const token = getToken(req);



		if(!email) return res.status(401).json({message: 'the email is required'});
		if(!password) return res.status(401).json({message: 'the password is required'});

		const user = await Users.findOne({where:{
			email: email
		}});

		if(!user) return res.status(401).json({message: 'user not exist'});

		const checkPassword =  await bcrypt.compare(password, user.password);

		if(!checkPassword) return res.status(401).json({message: 'Your password is invalid'});

		return await createUserToken(user, req, res);
	}

	static async userUpdate(req: Request, res: Response) {
		const { id } = req.params;

		const token = getToken(req);
		const user = await getUserByToken(token || '');

		if(!user) return res.status(401).json({message: 'user not exists'});


		if( user.id != id) return res.status(400).json({message: 'this is users is differents'});

		const { email, phone, address, password, confirmPassword} = req.body;

		if (!email) return res.status(401).json({message: 'emails is required'});

		if (!password) return res.status(401).json({message: 'password is required'});

		if (!confirmPassword) return res.status(401).json({message: 'confirm password is required'});

		if ( password !== confirmPassword) return res.status(401).json({message: 'confirm password different a password'});

		const salt = await bcrypt.genSalt(12);
		const passwordHash = await bcrypt.hash(password, salt);

		let image = undefined;

		if (req.file) {
			image = req.file.filename;
		}

		try {
			await Users.update({
				image: image,
				email: email,
				phone: phone,
				address: address,
				password: passwordHash
			},
			{where: { id: id}});

			return res.status(200).json({message: 'success update'});
		} catch (error) {
			return res.status(500).json({message: 'Server in error', error});
		}
	}

	static async userDelete(req: Request, res: Response) {
		const id =req.params.id;

		const token = getToken(req);
		const user = await getUserByToken(token || '');

		if(!user) return res.status(401).json({message: 'user not exists'});



		if( user.id != id) return res.status(400).json({message: 'this is users is differents'});

		try {
			await Users.destroy({where: {id: id}});

			return res.status(200).json({message: 'user delete success'});
		} catch (error){
			return res.status(500).json({message: 'error in server'});
		}
	}

}