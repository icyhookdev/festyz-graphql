"use strict";

var mongoose = require('mongoose');

var paginate = require('mongoose-paginate-v2');

var countrySchema = mongoose.Schema({
  country: Number,
  name: String,
  iso3: String,
  iso2: String,
  phoneCode: String,
  capital: String,
  currency: String
});
countrySchema.plugin(paginate);
var Country = module.exports = mongoose.model('Country', countrySchema);