"use strict";

var _index = require("../index");

var Seeder = require("./".concat(process.argv[2], ".seeder"));

require('dotenv').config();

var db = (0, _index.startDB)();
Seeder["default"].run();