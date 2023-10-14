import {Router} from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/register', UserController.registerUser);

export default router;