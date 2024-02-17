import httpStatus from 'http-status';
import { TVendor } from './Vendor.interface';
import { Vendor } from './Vendor.model';
import AppError from '../../../errors/AppError';

const registerVendor = async (payload: TVendor) => {
  if (await Vendor.isVendorExists(payload.email, payload.username)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Vendor Already Exists');
  }
  const result = await Vendor.create(payload);

  return result;
};

export const vendorService = {
  registerVendor,
};
