export const rootTypesDef = `
type Organization {
  _id: ID!
  name: String!
  shortDescription: String!
  LongDescription: String!
  logoUrl: String!
  websiteUrl: String!
  createdOn: String!
  events: [Event]
}
type Category {
  _id: ID!
  name: String!
  description: String!
  coverImage: String!
  createdOn: String!
  events: [Event]
}
type Event {
  _id: ID!
  title: String!
  shortDescripction: String!
  longDescripction: String!
  categoryId: ID!
  targetPublic: String!
  datetime: String!
  additionalDatetime: [String]
  organizationId: ID!
  allowedItems: [String]
  address: String!
  geoJsonAddress: String!
  durationUnit: String!
  duration: Int!
  frequency: Int
  frequencyInterval: String 
  isFree: Boolean!
  capacity: Int!
  ticketsUrl: String!
  imagesUrls: [String!]!
  coverImageUrl: String!
  status: String!
  countryId: ID!
  stateId: ID!
  cityId: ID!
  createdOn: String!
  cateogry: Category,
  organization: Organization,
}
`