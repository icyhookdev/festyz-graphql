"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queriesResolver = void 0;
var queriesResolver = {
  organization: function organization(parents, _ref, _ref2) {
    var _id = _ref._id;
    var models = _ref2.models;
    return models.Organization.findOne({
      _id: _id
    });
  },
  organizations: function organizations(parents, args, _ref3) {
    var models = _ref3.models;
    return models.Organization.find({});
  },
  category: function category(parents, _ref4, _ref5) {
    var _id = _ref4._id;
    var models = _ref5.models;
    return models.Category.findOne({
      _id: _id
    });
  },
  categories: function categories(parents, args, _ref6) {
    var models = _ref6.models;
    return models.Category.find({});
  },
  event: function event(parents, _ref7, _ref8) {
    var _id = _ref7._id;
    var models = _ref8.models;
    return models.Event.findOne({
      _id: _id
    });
  },
  events: function events(parents, args, _ref9) {
    var models = _ref9.models;
    return models.Event.find({});
  }
};
exports.queriesResolver = queriesResolver;