import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { UserValidations } from './User.validation';
import { userController } from './User.controller';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidations.createUserSchemaValidation),
  userController.createCustomer,
);

export const UserRoutes = router;
