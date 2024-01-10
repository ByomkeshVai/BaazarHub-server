import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import auth from '../../../middlewares/auth';
import { USER_ROLE } from '../User/User.constant';
import { CategoryController } from './Category.controller';
import { CategoryValidations } from './Category.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(CategoryValidations.CreateCategoryValidationSchema),
  auth(USER_ROLE.admin, USER_ROLE.moderator),
  CategoryController.createCategory,
);

router.get('/', CategoryController.getAllCategory);

export const CategoryRoutes = router;
