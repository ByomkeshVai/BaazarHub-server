import { z } from 'zod';

const CreateSubCategoryValidationSchema = z.object({
  name: z.string().min(1).max(255),
  image: z.string(),
  isDeleted: z.boolean().default(false).optional(),
});

export const SubCategoryValidations = {
  CreateSubCategoryValidationSchema,
};
