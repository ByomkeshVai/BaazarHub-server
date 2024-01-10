import { Router } from 'express';
import { UserRoutes } from '../modules/User/User.router';
import { AuthRoutes } from '../modules/Auth/Auth.router';
import { CategoryRoutes } from '../modules/Category/Category.route';
import { SubCategoryRoutes } from '../modules/SubCategory/SubCategory.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/sub-categories',
    route: SubCategoryRoutes,
  },
  // {
  //   path: '/reviews',
  //   route: ReviewRoutes,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
