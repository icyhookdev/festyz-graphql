"use strict";

var _graphqlYoga = require("graphql-yoga");

var _db = require("./db");

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _auth = require("./auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('dotenv').config();

var db = (0, _db.startDB)();
var _context = {
  models: _db.models,
  db: db
};
var server = new _graphqlYoga.GraphQLServer({
  typeDefs: _typeDefs["default"],
  resolvers: _resolvers["default"],
  middlewares: [_auth.permissions],
  context: function context(request) {
    return _objectSpread({}, _context, request);
  }
});
var opts = {
  cors: {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "allowedHeaders": 'Origin, X-Requested-With, Content-Type, Accept'
  },
  port: process.env.PORT
};
server.start(opts, function () {
  console.log("Server is running on http://localhost:".concat(opts.port));
});