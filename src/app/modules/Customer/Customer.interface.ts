/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TCustomer = {
  id: string;
  user: Types.ObjectId | string;
  name: TUserName;
  username: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  presentAddress?: string;
  permanentAddress?: string;
  profileImg?: string;
  isDeleted: boolean;
  status: 'active' | 'blocked' | 'in-progress';
};

//for creating static

export interface CustomerModel extends Model<TCustomer> {
  isUserExists(id: string): Promise<TCustomer | null>;
}
