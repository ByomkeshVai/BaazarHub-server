import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  // default_password: process.env.DEFAULT_PASS,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_SECRET_KEY,
  jwt_access_expires_in: process.env.JWT_EXPIRES_IN,
  admin_app_link: process.env.APP_LINK_ADMIN_URL,
  user_app_link: process.env.APP_LINK_USER_URL,
};
