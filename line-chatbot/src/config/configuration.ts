import * as path from 'path';

export default () => ({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});
