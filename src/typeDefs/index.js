import { queriesDef as Queries } from './queries'
import { rootTypesDef as RootTypes} from './rootTypes'
import { mutationsDef as Mutations } from './mutations'

const typeDefs = [ Queries, RootTypes, Mutations ]

export default typeDefs