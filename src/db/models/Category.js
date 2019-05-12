import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
})

const Category = mongoose.model('Category', CategorySchema)

export default Category;
