import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { userController } from './User.controller';
import { customerValidations } from '../Customer/Customer.validation';
import { vendorValidations } from '../Vendor/Vendor.validation';

const router = express.Router();

router.post(
  '/customer/register',
  validateRequest(customerValidations.createCustomerValidationSchema),
  userController.createCustomer,
);

router.post(
  '/vendor/register',
  validateRequest(vendorValidations.createVendorValidationSchema),
  userController.createVendor,
);

export const UserRoutes = router;
