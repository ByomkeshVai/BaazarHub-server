import { Types } from 'mongoose';

export interface TCategory {
  name: string;
  isDeleted?: boolean;
  isPriority?: boolean;
  createdBy?: string | Types.ObjectId;
}
