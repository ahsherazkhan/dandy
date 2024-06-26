import {ApolloServer} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import typeDefs from './schemaGql.js'

import mongoose from 'mongoose'
import { MONGO_URI } from "./config.js";

import './models/Blog.js'
import './models/Booking.js'
import './models/Product.js'
import './models/Review.js'


import resolvers from './resolver.js';
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})

mongoose.connection.on("error",(err)=>{
    console.log("error connecting",err)
})

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    introspection: true,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
