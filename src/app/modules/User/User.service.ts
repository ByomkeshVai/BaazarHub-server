import httpStatus from 'http-status';
import { TUser } from './User.interface';
import { User } from './User.model';
import AppError from '../../../errors/AppError';
import { Vendor } from '../Vendor/Vendor.model';
import { generateRandomID } from '../../../utils/generateRandomID';
import mongoose from 'mongoose';
import { TVendor } from '../Vendor/Vendor.interface';
import { TCustomer } from '../Customer/Customer.interface';
import { Customer } from '../Customer/Customer.model';

const createCustomerIntoDB = async (payload: TCustomer) => {
  const customerData: Partial<TUser> = {};

  if (await User.isUserExists(payload.email, payload.username)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User Already Exists');
  }

  //set customer role
  customerData.role = 'customer';
  customerData.email = payload.email;
  customerData.username = payload.username;
  customerData.mobile = payload.contactNo;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    customerData.id = generateRandomID();

    const newUser = await User.create([customerData], { session }); // array
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create User');
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newCustomer = await Customer.create([payload], { session });

    if (!newCustomer.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create customer');
    }

    await session.commitTransaction();
    await session.endSession();

    return newCustomer;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createVendorIntoDB = async (payload: TVendor) => {
  const vendorData: Partial<TUser> = {};

  if (await Vendor.isVendorExists(payload.email, payload.username)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Vendor Already Exists');
  }

  //set vendor role
  vendorData.role = 'vendor';
  vendorData.email = payload?.email;
  vendorData.username = payload?.username;
  vendorData.mobile = payload?.contactNo;
  vendorData.image = payload?.vendorImg;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    vendorData.id = generateRandomID();

    const newUser = await User.create([vendorData], { session }); // array
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create User');
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newVendor = await Vendor.create([payload], { session });

    if (!newVendor.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Vendor');
    }

    await session.commitTransaction();
    await session.endSession();

    return newVendor;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const UserServices = {
  createCustomerIntoDB,
  createVendorIntoDB,
};
