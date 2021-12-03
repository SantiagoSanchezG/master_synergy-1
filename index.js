const express = require('express');
const { graphqlHTTP } = require('express-graphql');
import { makeExecutableSchema } from "graphql-tools";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import "dotenv/config";

import models from './models';

// mezclar todos los archivos de carpetas de types y resolvers
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
// Otorgar permisos para acceder a los recursos desde el Front-end
// app.use(cors({
//   origin: ["http://localhost:3000"]
// }));
// app.use(auth.checkHeaders)

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlHTTP({
    schema,
    graphiql: true,
    context: {
      models,
      SECRET: process.env.SECRET,
      user: {
        _id: 1, username: 'Brayan', numdoc: 123456
      }
    }
    // (req) => {
    //   console.log("User ID:", req.user);
    //   return {
    //     schema,
    //     context: {
    //       models,
    //       SECRET: process.env.SECRET,
    //       user: req.user
    //     }
    //   }
    // })
  }));

mongoose.connect("mongodb+srv://admin:admin@cluster0.8vpll.mongodb.net/Master_Synergy?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Database is conected")
    app.listen(process.env.PORT, () => {
      console.info('Listening on http://localhost:3100/graphql')
    });
  })
  .catch(err => console.log(err));