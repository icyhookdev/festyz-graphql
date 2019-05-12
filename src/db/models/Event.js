import mongoose from 'mongoose'

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const EventSchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    require: true,
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization',
    require: true,
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
    enum: ['hours','day','week','month'],
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
    enum: ['hours','day','week','month'],
    require: true
  },
  isFree: {
    type: Boolean,
    require: true,
    default: false
  },
  capacity: {
    type: Number,
    require: true,
  },
  ticketsUrl: {
    type: String,
    require: false,
  },
  imagesUrls: {
    type: Array,
    require: false,
  },
  coverImageUrl: {
    type: String,
    require: false,
  },
  status: {
    type: String,
    enum: ['draft', 'live', 'started', 'ended', 'completed', 'canceled'],
    require: false,
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    require: true,
  },
  stateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State',
    require: true,
  },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
})

const Event = mongoose.model('Event', EventSchema)

export default Event