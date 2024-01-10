import { Schema, model } from 'mongoose';
import { boolean } from 'zod';
import { TSubCategory } from './SubCategory.interface';

const subCategorySchema = new Schema<TSubCategory>(
  {
    name: {
      type: String,
      required: [true, 'Sub-Category Name is required'],
      unique: true,
    },
    isDeleted: {
      type: boolean,
      default: false,
    },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const SubCategory = model<TSubCategory>('SubCategory', subCategorySchema);

export default SubCategory;
