import { z } from 'zod';

const CreateCategoryValidationSchema = z.object({
  name: z.string().min(1).max(255),
  isDeleted: z.boolean().default(false),
  isPriority: z.boolean().default(false),
});

export const CategoryValidations = {
  CreateCategoryValidationSchema,
};
