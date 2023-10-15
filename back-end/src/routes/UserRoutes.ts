import { Router } from 'express';
import UserController from '../controllers/UserController';
import imageStorage from '../middleware/image-up';
import multer from 'multer';


import  checkUserToken  from '../middleware/check-token';

const router = Router();
const imageUpload = multer(imageStorage);


router.get('/getUser/:id', checkUserToken, UserController.getUserById);
router.get('/showUsers', checkUserToken, UserController.showUsers);
router.post('/register', imageUpload.single('image'), UserController.registerUser);
router.patch('/updateUser/:id', checkUserToken, imageUpload.single('image'), UserController.userLogin);
router.delete('/deleteUser/:id', checkUserToken, UserController.userDelete);

export default router;