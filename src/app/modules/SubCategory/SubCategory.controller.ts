import sendResponse from '../../../utils/sendRequest';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status';
import { SubCategoryService } from './SubCategory.service';

const createSubCategory = catchAsync(async (req, res) => {
  const result = await SubCategoryService.createSubCategoryDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Sub Category created succesfully',
    data: result,
  });
});

const getAllSubCategory = catchAsync(async (req, res) => {
  const result = await SubCategoryService.getAllSubCategoryFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Sub-Categories retrieved successfully',
    data: result,
  });
});

export const SubCategoryController = {
  createSubCategory,
  getAllSubCategory,
};
