export const mutationsDef = `
   input OrganizationUpdate {
        name: String
        shortDescription: String
        LongDescription: String
        logoUrl: String
        websiteUrl: String
    }
  
   input EventUpdate {
        title: String
        shortDescripction: String
        longDescripction: String
    }
  
   type Mutation {
     createOrganization(name: String!, country: String!): Organization
     updateOrganization(_id: ID!, input: OrganizationUpdate ): Organization
     createEvent(title: String!, desc: String!, organizationId: ID!, quantity: Int): Event
     updateEvent(_id: ID!, input: EventUpdate ): Event
   }
`