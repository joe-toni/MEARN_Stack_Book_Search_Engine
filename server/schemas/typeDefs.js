const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID
    user: User
  }

  type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  input SavedBook{
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String  
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBook!): User
    removeBook(bookId: String!): User
  }

`;

module.exports = typeDefs;