import mongoose from 'mongoose'
import { Country, State, City, Organization, Category, Event } from './models'

mongoose.Promise = global.Promise

const getConnectionString = () => {
  if(process.env.NODE_ENV === 'production'){
      return `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
  }else{
      return `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}` ;
  }
}

export const startDB = () => {
  console.log(getConnectionString());
  return mongoose.connect(getConnectionString(), { useNewUrlParser: true })
  .then(() => {
      console.log('mongo connected')
  })
  .catch((err) => {
      console.log('ERROR', err)
  });

}

export const models = { 
  Country,
  State,
  City,
  Organization,
  Category,
  Event 
};