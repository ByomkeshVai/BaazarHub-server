import { Schema, model } from 'mongoose';
import { TCategory } from './Category.interface';
import { boolean } from 'zod';

const categorySchema = new Schema<TCategory>(
  {
    name: {
      type: String,
      required: [true, 'Category Name is required'],
      unique: true,
    },
    isDeleted: {
      type: boolean,
      default: false,
    },
    isPriority: {
      type: boolean,
      default: false,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Category = model<TCategory>('Category', categorySchema);

export default Category;
