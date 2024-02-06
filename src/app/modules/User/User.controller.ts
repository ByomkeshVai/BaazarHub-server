import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendRequest';
import { UserServices } from './User.service';

const createCustomer = catchAsync(async (req, res) => {
  const { customer: customerData } = req.body;

  const result = await UserServices.createCustomerIntoDB(customerData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Customer Registered successfully',
    data: result,
  });
});

const createVendor = catchAsync(async (req, res) => {
  const { vendor: vendorData } = req.body;

  const result = await UserServices.createVendorIntoDB(vendorData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vendor is Registered succesfully',
    data: result,
  });
});

export const userController = {
  createCustomer,
  createVendor,
};
