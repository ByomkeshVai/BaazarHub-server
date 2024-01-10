import { Types } from 'mongoose';

export interface TSubCategory {
  name: string;
  isDeleted?: boolean;
  category: string | Types.ObjectId;
}
