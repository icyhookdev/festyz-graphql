"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rootTypes = require("./rootTypes");

var _queries = require("./queries");

var _mutations = require("./mutations");

var resolvers = {
  Query: _queries.queriesResolver,
  Mutation: _mutations.mutationsResolver,
  Organization: _rootTypes.organizationResolver,
  Category: _rootTypes.categoryResolver,
  Event: _rootTypes.eventResolver
};
var _default = resolvers;
exports["default"] = _default;