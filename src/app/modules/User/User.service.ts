import httpStatus from 'http-status';
import { TUser } from './User.interface';
import { User } from './User.model';
import AppError from '../../../errors/AppError';

const registerUserIntoDB = async (payload: TUser) => {
  if (await User.isUserExists(payload.email, payload.username)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User Already Exists');
  }

  const newUser = await User.create(payload);
  return newUser;
};

export const UserServices = {
  registerUserIntoDB,
};
