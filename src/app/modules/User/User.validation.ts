import { z } from 'zod';

const roleEnum = z.enum(['admin', 'customer', 'moderator', 'vendor']);

const createUserSchemaValidation = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  mobile: z.string().optional(),
  image: z.string().optional(),
  // .refine(
  //   (value) =>
  //     /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(
  //       value,
  //     ),
  //   {
  //     message:
  //       'Password must be at least 8 characters long and include at least one uppercase letter and one special character.',
  //   },
  // ),
  passwordChangedAt: z.date().optional(),
  role: roleEnum,
});

export const UserValidations = {
  createUserSchemaValidation,
};
