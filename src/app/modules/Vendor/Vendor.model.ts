import { Schema, model } from 'mongoose';
import {
  TLocalShop,
  TUserName,
  TVendor,
  VendorModel,
} from './Vendor.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
});

const vendorShopSchema = new Schema<TLocalShop>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  shopAddress: {
    type: String,
    required: [true, 'Shop Address is required'],
  },
  shopContactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  shopCategory: {
    type: String,
    required: [true, 'Category is required'],
  },
});

const vendorSchema = new Schema<TVendor, VendorModel>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is required'],
    },
    username: {
      type: String,
      required: [true, 'username is required'],
      unique: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is required'],
    },
    dateOfBirth: { type: Date },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNo: { type: String, required: [true, 'Contact number is required'] },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    shop: {
      type: vendorShopSchema,
      required: [true, 'Guardian information is required'],
    },
    profileImg: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['active', 'blocked', 'in-progress'],
      default: 'in-progress',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

//virtual
vendorSchema.virtual('fullName').get(function () {
  return (
    this?.name?.firstName +
    ' ' +
    this?.name?.middleName +
    ' ' +
    this?.name?.lastName
  );
});

// Query Middleware
vendorSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

vendorSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

vendorSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//creating a custom static method
vendorSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Vendor.findOne({ id });
  return existingUser;
};

export const Vendor = model<TVendor, VendorModel>('Vendor', vendorSchema);
