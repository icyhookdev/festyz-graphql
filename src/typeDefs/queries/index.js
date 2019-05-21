export const queriesDef = `
type Query {
  organization(_id: ID): Organization
  organizations(first: Int, field: String, after: String, order: Int): OrganizationsResponse
  event(_id: ID): Event
  events(first: Int, field: String, after: String, order: Int): EventsResponse
  categories(first: Int, field: String, after: String, order: Int): CategoriesResponse,
  category(_id:ID): Category
}
`