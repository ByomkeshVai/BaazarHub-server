import { z } from 'zod';

const CreateCategoryValidationSchema = z.object({
  name: z.string().min(1).max(255),
  isDeleted: z.boolean().default(false).optional(),
  isPriority: z.boolean().default(false).optional(),
});

export const CategoryValidations = {
  CreateCategoryValidationSchema,
};
