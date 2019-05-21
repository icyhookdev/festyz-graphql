# Festyz Graphql API

This is an Graphql API for managing events, categories and organizations of Festyz backend. This API is build on top of [Yoga](https://github.com/prisma/graphql-yoga) and use [Mongoose](https://mongoosejs.com/) as ODM.

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

+ Docker installed
+ NodeJS Installed
+ Nodemon

### Getting Started

#### Environment

Up docker container for mongo

    docker-compose up -d

Install node modules (we recommend using yarn)

`yarn`

Copy .env.example to .env

`cp .env.example .env`

Setup your environment variables

    PORT=4000
    DB_HOST=localhost:27017
    DB_NAME=festyz
    DB_USER=festyz
    DB_PASSWORD=festyz

#### Seeding

Seed the data running the scripts

    yarn seed-db categories
    yarn seed-db organizations
    yarn seed-db events

To define more seeders or udpate it you can find them on the directory ```./db/seeders/```, the data is generated using [Faker](https://www.npmjs.com/package/faker)


#### Queries and Pagination

The queries of this API are built on top of [mongoose-graphql-pagination](https://github.com/limit-zero/mongoose-graphql-pagination#readme) for making easier handling pagination and queries, there is a response type element which looks as following:

    type Response {
        data: [Entity]
        totalCount: Int
        hasNextPage: Boolean
        cursor: String
    }

Every response will have that schema and any other specific query of the entity must be inside data field, the parameters for every fetch query are the followings:

    + **first**: Number of records to fetch
    + **after**: Cursor used as starting record in fetch, based on the cursor returned in query
    + **field**: Field used to sort the data,
    + **order**: Use 1 for ASC and -1 for DSC.

For example we can query categories as this:

    query {
    categories(first:2, after: "5cd8aaebeaf3c87d7cec19a9") { data { name }, hasNextPage, cursor, totalCount }
    }


#### Running

+ Run dev server with ```yarn dev```
+ Open browser on http://localhost:4000


### Contributing

Using commitizen is **mandatory** to commit to this project.


