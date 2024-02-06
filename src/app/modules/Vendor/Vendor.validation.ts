import { z } from 'zod';

const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

const createShopValidationSchema = z.object({
  name: z.string(),
  shopAddress: z.string(),
  shopContactNo: z.string(),
  shopCategory: z.string(),
});

export const createVendorValidationSchema = z.object({
  body: z.object({
    vendor: z.object({
      name: createUserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      username: z.string(),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      shop: createShopValidationSchema,
      profileImg: z.string(),
    }),
  }),
});

export const vendorValidations = {
  createVendorValidationSchema,
};
