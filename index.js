const { ApolloServer, AuthenticationError } = require('apollo-server')
const mongoose = require('mongoose')
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()
const {typeDefs,resolvers} = require('./src/resources')

// Connect ot mongodb
mongoose.set('bufferCommands', false);
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: err =>{ 
    console.log(err)
    return err
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})