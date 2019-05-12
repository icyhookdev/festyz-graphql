import mongoose from 'mongoose'

const OrganizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  logoUrl: {
    type: String,
    required: true
  },
  websiteUrl: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
})

const Organization = mongoose.model('Organization', OrganizationSchema)

export default Organization;
