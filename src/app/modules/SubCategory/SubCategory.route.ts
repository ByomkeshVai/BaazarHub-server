import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import auth from '../../../middlewares/auth';
import { USER_ROLE } from '../User/User.constant';
import { SubCategoryValidations } from './SubCategory.validation';
import { SubCategoryController } from './SubCategory.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(SubCategoryValidations.CreateSubCategoryValidationSchema),
  auth(USER_ROLE.admin, USER_ROLE.moderator),
  SubCategoryController.getAllSubCategory,
);

router.get('/', SubCategoryController.getAllSubCategory);

export const SubCategoryRoutes = router;
