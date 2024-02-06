import { Types } from 'mongoose';

export interface TSubCategory {
  name: string;
  isDeleted?: boolean;
  image: string;
  category: string | Types.ObjectId;
}
