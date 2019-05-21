export const queriesDef = `
type Query {
  organization(_id: ID): Organization
  organizations(first: Int, field: String, after: String, order: Int): [Organization]
  event(_id: ID): Event
  events(first: Int, field: String, after: String, order: Int): [Event]
  categories(first: Int, field: String, after: String, order: Int): [Category],
  category(_id:ID): Category
}
`