const { ApolloServer, gql } = require('apollo-server-lambda')
const { getAllPages } = require('./notion.js')

const typeDefs = gql`
  type Page {
    id: ID
    page_title: String
    slug: String
  }
  type Query {
    getPages: [Page]
  }
`

const resolvers = {
  Query: {
    getPages: () => {
      try {
        const allRecords = getAllPages()
        return allRecords
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}

const getHandler = (event, context) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  const handler = server.createHandler()
  if (!event.requestContext) {
    event.requestContext = context
  }
  return handler(event, context)
}

exports.handler = getHandler
