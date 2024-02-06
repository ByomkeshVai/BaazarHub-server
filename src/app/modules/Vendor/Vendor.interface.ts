/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TLocalShop = {
  name: string;
  shopAddress: string;
  shopContactNo: string;
  shopCategory: string;
};

export type TVendor = {
  id: string;
  user: Types.ObjectId | string;
  name: TUserName;
  username: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  shop: TLocalShop;
  profileImg?: string;
  isDeleted: boolean;
  status: 'active' | 'blocked' | 'in-progress';
};

//for creating static

export interface VendorModel extends Model<TVendor> {
  isVendorExists(email: string, username: string): Promise<TVendor | null>;
}
