import { Router } from 'express';
import { UserRoutes } from '../modules/User/User.router';
const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  // {
  //   path: '/auth',
  //   route: AuthRoutes,
  // },
  // {
  //   path: '/courses',
  //   route: CourseRoutes,
  // },
  // {
  //   path: '/categories',
  //   route: CategoryRoutes,
  // },
  // {
  //   path: '/reviews',
  //   route: ReviewRoutes,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
