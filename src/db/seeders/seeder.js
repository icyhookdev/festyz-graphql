
import { startDB } from '../index'
const Seeder = require(`./${process.argv[2]}.seeder`);
require('dotenv').config()

const db = startDB({
    user: process.env.DB_USER,
    pwd: process.env.DB_PASSWORD,
    url: process.env.DB_HOST,
    db: process.env.DB_NAME
  })
  
Seeder.default.run();
