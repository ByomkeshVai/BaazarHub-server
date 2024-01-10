import { z } from 'zod';

const CreateSubCategoryValidationSchema = z.object({
  name: z.string().min(1).max(255),
  isDeleted: z.boolean().default(false),
});

export const SubCategoryValidations = {
  CreateSubCategoryValidationSchema,
};
