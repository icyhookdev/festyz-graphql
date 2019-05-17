import { GraphQLServer } from 'graphql-yoga'
import { startDB, models } from './db'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { permissions } from './auth';
import  cors from 'cors';

require('dotenv').config()

const db = startDB()

const context = {
  models,
  db
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  middlewares: [permissions],
  context: request => ({
    ...context,
    ...request,
})});

const opts = {
  cors: {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "allowedHeaders": 'Origin, X-Requested-With, Content-Type, Accept'
  },
  port: process.env.PORT
}

server.express.use(cors());

server.start(opts, () => {
  console.log(`Server is running on http://localhost:${opts.port}`)
})