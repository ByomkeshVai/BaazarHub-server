import { Schema, model } from 'mongoose';
import { TSubCategory } from './SubCategory.interface';

const subCategorySchema = new Schema<TSubCategory>(
  {
    name: {
      type: String,
      required: [true, 'Sub-Category Name is required'],
      unique: true,
    },
    image: {
      type: String,
      required: [true, 'Image Name is required'],
    },
    isDeleted: {
      type: Boolean,
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
