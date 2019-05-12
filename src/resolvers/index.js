import { 
  eventResolver as Event, 
  organizationResolver as Organization 
} from './rootTypes'
import { queriesResolver as Query } from './queries'
import { mutationsResolver as Mutation } from './mutations'

const resolvers = {
  Query,
  Mutation,
  Organization,
  Event
}

export default resolvers