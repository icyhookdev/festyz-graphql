import { 
  eventResolver as Event, 
  organizationResolver as Organization,
  categoryResolver as Category 
} from './rootTypes'
import { queriesResolver as Query } from './queries'
import { mutationsResolver as Mutation } from './mutations'

const resolvers = {
  Query,
  Mutation,
  Organization,
  Category,
  Event
}

export default resolvers