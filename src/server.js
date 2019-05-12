import { GraphQLServer } from 'graphql-yoga'
import { startDB, models } from './db'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const db = startDB({
  user: 'graphql',
  pwd: 'josh12',
  url: 'localhost:27017',
  db: 'graphqlYoga'
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
  port: 4000
}

Server.start(opts, () => {
  console.log(`Server is running on http://localhost:${opts.port}`)
})