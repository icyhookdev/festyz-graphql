const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const stateSchema = mongoose.Schema({
  id: String,
  name: String,
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    require: true,
  },  
});

stateSchema.plugin(paginate);

const State = (module.exports = mongoose.model('State', stateSchema));
