import * as jwt from "jsonwebtoken";
import jwksClient from 'jwks-rsa';
import { rule, shield, and, or, not } from 'graphql-shield'
require('dotenv').config()

const client = jwksClient({
  jwksUri: `${process.env.AUTH_DOMAIN}/.well-known/jwks.json`
});


const getKey = (header, cb) => {
  client.getSigningKey(header.kid, function(err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

const options = {
  audience: process.env.AUTH_AUDIENCE,
  issuer: process.env.AUTH_DOMAIN,
  algorithms: ['RS256']
};


const isAuthenticated = rule()((parent, args, ctx, info) => {
  let token = ctx.request.headers.token;
  
  jwt.verify(token, getKey, options, (err, decoded) => {
      if(err) {
        return false;
      }
      return decoded.claims !== null;
    });
});

const permissions = shield({
  Mutation: {
    createEvent: isAuthenticated,
    updateEvent: isAuthenticated,
    createOrganization: isAuthenticated,
    updateOrganization: isAuthenticated,
}
});


export { permissions };