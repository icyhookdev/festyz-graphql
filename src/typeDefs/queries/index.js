export const queriesDef = `
type Query {
  organization(_id: ID): Organization
  organizations: [Organization]
  event(_id: ID): Event
  events: [Event]
  categories: [Category],
  category(_id:ID): Category
}
`