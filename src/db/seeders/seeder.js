
import { startDB } from '../index'
const Seeder = require(`./${process.argv[2]}.seeder`);
require('dotenv').config()

const db = startDB()
  
Seeder.default.run();
