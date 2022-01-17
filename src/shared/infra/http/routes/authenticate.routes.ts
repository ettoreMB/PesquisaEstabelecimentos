import { AuthenticateUserController } from "@modules/users/useCases/authenticateUser/authenticateUserController";
import { RefreshTokenController } from "@modules/users/useCases/RefreshToken/RefreshTokenController";
import { Router } from "express";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post('/sessions', authenticateUserController.handle);
authenticateRoutes.post('/sessions/refreshToken', refreshTokenController.handle)

export { authenticateRoutes }