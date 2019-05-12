# Festyz Graphql API

This is an Graphql API for managing events, categories and organizations of Festyz backend. This API is build on top of [Yoga](https://github.com/prisma/graphql-yoga) and use [Mongoose](https://mongoosejs.com/) as ODM.

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

+ Docker installed
+ NodeJS Installed
+ Nodemon

### Getting Started

Up docker container for mongo

    docker-compose up -d

Install node modules (we recommend using yarn)

`yarn`

Copy .env.example to .env

`cp .env.example .env`

Setup your environment variables

    PORT=27017
    DB_HOST=mongoserver
    DB_PORT=27017
    DB_NAME=festyz-staging
    DB_USER=
    DB_PASSWORD=

+ Seed the data via []
+ Run dev server with ```yarn dev```
+ Open browser on http://localhost:4000


