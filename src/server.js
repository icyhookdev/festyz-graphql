import { GraphQLServer } from 'graphql-yoga'
import { startDB, models } from './db'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
require('dotenv').config()

const db = startDB({
  user: process.env.DB_USER,
  pwd: process.env.DB_PASSWORD,
  url: process.env.DB_HOST,
  db: process.env.DB_NAME
})

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