"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootTypesDef = void 0;
var rootTypesDef = "\nscalar Coordinates\ntype PointGeometry {\n  type: String!\n  coordinates: Coordinates!\n}\n\ntype Organization {\n  _id: ID!\n  name: String!\n  shortDescription: String!\n  longDescription: String!\n  logoUrl: String!\n  websiteUrl: String!\n  createdOn: String!\n  events: [Event]\n}\ntype Category {\n  _id: ID!\n  name: String!\n  description: String!\n  coverImage: String!\n  createdOn: String!\n  color: String!\n  events: [Event]\n}\ntype Event {\n  _id: ID!\n  title: String!\n  shortDescripction: String!\n  longDescripction: String!\n  categoryId: ID!\n  targetPublic: String!\n  datetime: String!\n  additionalDatetime: [String]\n  organizationId: ID!\n  allowedItems: [String]\n  address: String!\n  geoJsonAddress: PointGeometry!\n  durationUnit: String!\n  duration: Int!\n  frequency: Int\n  frequencyInterval: String \n  isFree: Boolean!\n  capacity: Int!\n  ticketsUrl: String!\n  imagesUrls: [String!]!\n  coverImageUrl: String!\n  status: String!\n  countryId: ID!\n  stateId: ID!\n  cityId: ID!\n  createdOn: String!\n  category: Category,\n  organization: Organization,\n}\n";
exports.rootTypesDef = rootTypesDef;