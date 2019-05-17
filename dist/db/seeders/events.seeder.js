"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../models");

var _moment = _interopRequireDefault(require("moment"));

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var EventsSeeder = {
  getRandomOrganization: function getRandomOrganization() {
    return new Promise(function (resolve, reject) {
      _models.Organization.count().exec(function (err, count) {
        var random = Math.floor(Math.random() * count);

        _models.Organization.findOne().skip(random).exec(function (err, result) {
          resolve(result._id);
        });
      });
    });
  },
  getRandomCategory: function getRandomCategory() {
    return new Promise(function (resolve, reject) {
      _models.Category.count().exec(function (err, count) {
        var random = Math.floor(Math.random() * count);

        _models.Category.findOne().skip(random).exec(function (err, result) {
          resolve(result._id);
        });
      });
    });
  },
  run: function () {
    var _run = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data, targetPublic, i, randomOrganization, randomCategory;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = [];
              targetPublic = ['all-public', 'children', 'teenage'];
              i = 0;

            case 3:
              if (!(i < 50)) {
                _context.next = 14;
                break;
              }

              _context.next = 6;
              return this.getRandomOrganization();

            case 6:
              randomOrganization = _context.sent;
              _context.next = 9;
              return this.getRandomCategory();

            case 9:
              randomCategory = _context.sent;
              data.push({
                title: _faker["default"].lorem.words(2),
                shortDescripction: _faker["default"].lorem.sentence(5),
                longDescripction: _faker["default"].lorem.sentences(5),
                categoryId: randomCategory,
                targetPublic: _faker["default"].random.arrayElement(targetPublic),
                datetime: _faker["default"].date.future(),
                additionalDatetime: [],
                organizationId: randomOrganization,
                allowedItems: [],
                address: _faker["default"].address.streetAddress(),
                geoJsonAddress: {
                  type: 'Point',
                  coordinates: [parseFloat(_faker["default"].address.latitude()), parseFloat(_faker["default"].address.longitude())]
                },
                durationUnit: 'hours',
                duration: 1,
                frequency: 0,
                frequencyInterval: 'day',
                isFree: _faker["default"].random["boolean"](),
                capacity: _faker["default"].random.number(100, 800, 0),
                ticketsUrl: _faker["default"].internet.url(),
                imagesUrls: [_faker["default"].image.imageUrl(), _faker["default"].image.imageUrl, _faker["default"].image.imageUrl],
                coverImageUrl: _faker["default"].image.imageUrl(),
                status: _faker["default"].random.arrayElement(['draft', 'live', 'started', 'ended', 'completed', 'canceled']),
                createdOn: (0, _moment["default"])()
              });

            case 11:
              i++;
              _context.next = 3;
              break;

            case 14:
              _models.Event.create(data, function (err) {
                if (err) {
                  console.log('Something bad happened', err);
                  process.exit();
                }

                console.log('Seed executed succesfully');
                process.exit();
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function run() {
      return _run.apply(this, arguments);
    }

    return run;
  }()
};
var _default = EventsSeeder;
exports["default"] = _default;