import { Schema, model } from 'mongoose';
import { CustomerModel, TCustomer, TUserName } from './Customer.interface';

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

const customerSchema = new Schema<TCustomer, CustomerModel>(
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
    presentAddress: {
      type: String,
    },
    permanentAddress: {
      type: String,
    },
    profileImg: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['active', 'blocked', 'in-progress'],
      default: 'active',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

//virtual
customerSchema.virtual('fullName').get(function () {
  return (
    this?.name?.firstName +
    ' ' +
    this?.name?.middleName +
    ' ' +
    this?.name?.lastName
  );
});

// Query Middleware
customerSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

customerSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

customerSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//creating a custom static method
customerSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Customer.findOne({ id });
  return existingUser;
};

export const Customer = model<TCustomer, CustomerModel>(
  'Customer',
  customerSchema,
);
