export const rootTypesDef = `
scalar Coordinates
type PointGeometry {
  type: String!
  coordinates: Coordinates!
}

type Organization {
  _id: ID!
  name: String!
  shortDescription: String!
  longDescription: String!
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
  color: String!
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
  geoJsonAddress: PointGeometry!
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
  category: Category,
  organization: Organization,
}
`