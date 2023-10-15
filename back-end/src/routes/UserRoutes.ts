import {Router} from 'express';
import UserController from '../controllers/UserController';
import imageStorage from '../middleware/image-up';
import multer from 'multer';

const router = Router();
const imageUpload = multer(imageStorage);

router.get('/register', imageUpload.single('image'), UserController.registerUser);

export default router;