import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { AuthValidation } from './Auth.validation';
import { AuthControllers } from './Auth.controller';
import { USER_ROLE } from '../User/User.constant';
import auth from '../../../middlewares/auth';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);

router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.user),
  AuthControllers.changePassword,
);

export const AuthRoutes = router;
