"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pointSchema = new _mongoose["default"].Schema({
  type: {
    type: String,
    "enum": ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});
var EventSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    require: true
  },
  shortDescripction: {
    type: String,
    require: true
  },
  longDescripction: {
    type: String,
    require: true
  },
  categoryId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Category',
    require: true
  },
  // type: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category'
  // },
  targetPublic: {
    type: String,
    require: true
  },
  datetime: {
    type: Date,
    require: true
  },
  additionalDatetime: {
    type: [Date],
    require: false
  },
  organizationId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Organization',
    require: true
  },
  allowedItems: {
    type: Array,
    require: false
  },
  address: {
    type: String,
    require: false
  },
  geoJsonAddress: {
    type: pointSchema,
    require: false
  },
  durationUnit: {
    type: String,
    "enum": ['hours', 'day', 'week', 'month'],
    require: true
  },
  duration: {
    type: Number,
    require: true
  },
  frequency: {
    type: Number,
    require: true
  },
  frequencyInterval: {
    type: String,
    "enum": ['hours', 'day', 'week', 'month'],
    require: true
  },
  isFree: {
    type: Boolean,
    require: true,
    "default": false
  },
  capacity: {
    type: Number,
    require: true
  },
  ticketsUrl: {
    type: String,
    require: false
  },
  imagesUrls: {
    type: Array,
    require: false
  },
  coverImageUrl: {
    type: String,
    require: false
  },
  status: {
    type: String,
    "enum": ['draft', 'live', 'started', 'ended', 'completed', 'canceled'],
    require: false
  },
  countryId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Country' // require: true,

  },
  stateId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'State' // require: true,

  },
  cityId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'City' // require: true,

  },
  createdOn: {
    type: Date,
    "default": Date.now
  }
});

var Event = _mongoose["default"].model('Event', EventSchema);

var _default = Event;
exports["default"] = _default;