"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutationsDef = void 0;
var mutationsDef = "\n   input OrganizationUpdate {\n        name: String\n        shortDescription: String\n        longDescription: String\n        logoUrl: String\n        websiteUrl: String\n    }\n  \n   input EventUpdate {\n        title: String\n        shortDescripction: String\n        longDescripction: String\n    }\n  \n   type Mutation {\n     createOrganization(name: String!, country: String!): Organization\n     updateOrganization(_id: ID!, input: OrganizationUpdate ): Organization\n     createEvent(title: String!, desc: String!, organizationId: ID!, quantity: Int): Event\n     updateEvent(_id: ID!, input: EventUpdate ): Event\n   }\n";
exports.mutationsDef = mutationsDef;