"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutationsResolver = void 0;
var mutationsResolver = {
  createOrganization: function createOrganization(parents, args, _ref) {
    var models = _ref.models;
    return models.Organization.create(args);
  },
  updateOrganization: function updateOrganization(parents, _ref2, _ref3) {
    var _id = _ref2._id,
        input = _ref2.input;
    var models = _ref3.models;
    return models.Organization.findOneAndUpdate({
      _id: _id
    }, input, {
      "new": true
    });
  },
  createEvent: function createEvent(parents, args, _ref4) {
    var models = _ref4.models;
    return models.Event.create(args);
  },
  updateEvent: function updateEvent(parents, _ref5, _ref6) {
    var _id = _ref5._id,
        input = _ref5.input;
    var models = _ref6.models;
    return models.Event.findOneAndUpdate({
      _id: _id
    }, input, {
      "new": true
    });
  }
};
exports.mutationsResolver = mutationsResolver;