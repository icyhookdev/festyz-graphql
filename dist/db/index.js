"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.models = exports.startDB = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _models = require("./models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].Promise = global.Promise;

var getConnectionString = function getConnectionString() {
  if (process.env.NODE_ENV === 'production') {
    return "mongodb+srv://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASSWORD, "@").concat(process.env.DB_HOST, "/").concat(process.env.DB_NAME);
  } else {
    return "mongodb://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASSWORD, "@").concat(process.env.DB_HOST, "/").concat(process.env.DB_NAME);
  }
};

var startDB = function startDB() {
  console.log(getConnectionString());
  return _mongoose["default"].connect(getConnectionString(), {
    useNewUrlParser: true
  }).then(function () {
    console.log('mongo connected');
  })["catch"](function (err) {
    console.log('ERROR', err);
  });
};

exports.startDB = startDB;
var models = {
  Country: _models.Country,
  State: _models.State,
  City: _models.City,
  Organization: _models.Organization,
  Category: _models.Category,
  Event: _models.Event
};
exports.models = models;