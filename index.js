const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()
const {typeDefs,resolvers} = require('./src/resources')
// Connect ot mongodb
mongoose.set('bufferCommands', false);
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true });

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: err =>{ 
    console.log(err)
    return err
  },
  context: ({ req }) => ({
    headers: req ? req.headers : ''
  }),
  introspection:true,
  playground: true
})

server.applyMiddleware({ app, path:'/graph'})

app.use(express.static(__dirname+'/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});


// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`)
// })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);