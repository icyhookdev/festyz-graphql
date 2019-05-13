import { GraphQLServer } from 'graphql-yoga'
import { startDB, models } from './db'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
require('dotenv').config()

const db = startDB()

const context = {
  models,
  db
}

const Server = new GraphQLServer({
  typeDefs,
  resolvers,
  context,
})

const opts = {
  port: process.env.PORT
}

Server.start(opts, () => {
  console.log(`Server is running on http://localhost:${opts.port}`)
})