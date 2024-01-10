import express from 'express';
import { UserControllers } from './User.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { UserValidations } from './User.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidations.createUserSchemaValidation),
  UserControllers.createUser,
);

export const UserRoutes = router;
