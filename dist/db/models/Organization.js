"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OrganizationSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  logoUrl: {
    type: String,
    required: true
  },
  websiteUrl: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    "default": Date.now
  }
});

var Organization = _mongoose["default"].model('Organization', OrganizationSchema);

var _default = Organization;
exports["default"] = _default;