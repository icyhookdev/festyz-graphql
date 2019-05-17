"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _queries = require("./queries");

var _rootTypes = require("./rootTypes");

var _mutations = require("./mutations");

var typeDefs = [_queries.queriesDef, _rootTypes.rootTypesDef, _mutations.mutationsDef];
var _default = typeDefs;
exports["default"] = _default;