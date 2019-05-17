"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permissions = void 0;

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

var _jwksRsa = _interopRequireDefault(require("jwks-rsa"));

var _graphqlShield = require("graphql-shield");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

require('dotenv').config();

var client = (0, _jwksRsa["default"])({
  jwksUri: "".concat(process.env.AUTH_DOMAIN, "/.well-known/jwks.json")
});

var getKey = function getKey(header, cb) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
};

var options = {
  audience: process.env.AUTH_AUDIENCE,
  issuer: process.env.AUTH_DOMAIN,
  algorithms: ['RS256']
};
var isAuthenticated = (0, _graphqlShield.rule)()(function (parent, args, ctx, info) {
  var token = ctx.request.headers.token;
  jwt.verify(token, getKey, options, function (err, decoded) {
    if (err) {
      return false;
    }

    return decoded.claims !== null;
  });
});
var permissions = (0, _graphqlShield.shield)({
  Mutation: {
    createEvent: isAuthenticated,
    updateEvent: isAuthenticated,
    createOrganization: isAuthenticated,
    updateOrganization: isAuthenticated
  }
});
exports.permissions = permissions;