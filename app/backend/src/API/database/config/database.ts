import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: 'mysql098',
  database: 'TASKS_MANAGER',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = config;
