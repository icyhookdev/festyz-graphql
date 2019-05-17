"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.organizationResolver = exports.categoryResolver = exports.eventResolver = void 0;
var eventResolver = {
  organization: function organization(_ref, _, _ref2) {
    var organizationId = _ref.organizationId;
    var models = _ref2.models;
    return models.Organization.findOne({
      _id: organizationId
    });
  }
};
exports.eventResolver = eventResolver;
var categoryResolver = {
  events: function events(_ref3, args, _ref4) {
    var _id = _ref3._id;
    var models = _ref4.models;
    return models.Event.find({
      categoryId: _id
    });
  }
};
exports.categoryResolver = categoryResolver;
var organizationResolver = {
  events: function events(_ref5, args, _ref6) {
    var _id = _ref5._id;
    var models = _ref6.models;
    return models.Event.find({
      organizationId: _id
    });
  }
};
exports.organizationResolver = organizationResolver;