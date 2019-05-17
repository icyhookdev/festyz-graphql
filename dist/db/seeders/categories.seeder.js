"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Category = _interopRequireDefault(require("../models/Category"));

var _faker = _interopRequireDefault(require("faker"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var OrganizationSeeder = {
  run: function () {
    var _run = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data, i;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = [];

              for (i = 0; i < 10; i++) {
                data.push({
                  name: _faker["default"].commerce.department(),
                  description: _faker["default"].lorem.sentence(5),
                  coverImage: _faker["default"].image.imageUrl(),
                  color: _faker["default"].internet.color(),
                  createdOn: (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss')
                });
              }

              _Category["default"].create(data, function (err) {
                if (err) {
                  console.log('Something bad happened', err);
                  process.exit();
                }

                console.log('Seed executed succesfully');
                process.exit();
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function run() {
      return _run.apply(this, arguments);
    }

    return run;
  }()
};
var _default = OrganizationSeeder;
exports["default"] = _default;