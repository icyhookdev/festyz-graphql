const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const countrySchema = mongoose.Schema({
  country: Number,
  name: String,
  iso3: String,
  iso2: String,
  phoneCode: String,
  capital: String,
  currency: String,
});

countrySchema.plugin(paginate);

const Country = (module.exports = mongoose.model('Country', countrySchema));
