"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queriesDef = void 0;
var queriesDef = "\ntype Query {\n  organization(_id: ID): Organization\n  organizations: [Organization]\n  event(_id: ID): Event\n  events: [Event]\n  categories: [Category],\n  category(_id:ID): Category\n}\n";
exports.queriesDef = queriesDef;