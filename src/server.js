import { GraphQLServer } from 'graphql-yoga'
import { startDB, models } from './db'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { permissions } from './auth';

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
  port: process.env.PORT
}

server.start(opts, () => {
  console.log(`Server is running on http://localhost:${opts.port}`)
})