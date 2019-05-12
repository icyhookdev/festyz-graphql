import mongoose from 'mongoose'
import { Country, State, City, Organization, Category, Event } from './models'

mongoose.Promise = global.Promise

export const startDB = ({ user, pwd, url, db }) => mongoose.connect(`mongodb://${user}:${pwd}@${url}/${db}`, { useNewUrlParser: true })

export const models = { 
  Country,
  State,
  City,
  Organization,
  Category,
  Event 
};