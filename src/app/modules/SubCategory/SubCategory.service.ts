import Category from '../Category/Category.model';
import { TSubCategory } from './SubCategory.interface';
import AppError from '../../../errors/AppError';
import httpStatus from 'http-status';
import SubCategory from './SubCategory.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { SubCategorySearchableFields } from './SubCategory.constant';

const createSubCategoryDB = async (payload: TSubCategory) => {
  const categoryName = await Category.findById(payload.category);

  if (!categoryName) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Sub-Category not found');
  }

  const result = await SubCategory.create(payload);

  return result;
};

const getAllSubCategoryFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    SubCategory.find().populate('category.name'),
    query,
  )
    .search(SubCategorySearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  const meta = await courseQuery.countTotal();

  return {
    meta,
    result,
  };
};

export const SubCategoryService = {
  createSubCategoryDB,
  getAllSubCategoryFromDB,
};
