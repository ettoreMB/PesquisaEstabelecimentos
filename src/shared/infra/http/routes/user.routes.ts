import { CreateUserController } from '@modules/users/useCases/CreateUser/CreateUserController';
import { GetProfileController } from '@modules/users/useCases/GetProfile/GetProfileController';
import { Router } from 'express';
import { ensureAuthenticated } from '../../../../middlewares/EnsureAuthenticated';


const userRoutes = Router();

const createUserController = new CreateUserController();
const getUserProfile = new GetProfileController();
userRoutes.post('/', createUserController.handle);
userRoutes.get('/profile', ensureAuthenticated, getUserProfile.handle);



export { userRoutes }