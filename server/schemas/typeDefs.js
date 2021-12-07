const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID
        name: String
        email: String
        bookCount: Number
        savedBooks: [Book]
    }
    type Book {
        bookId: String
        authors: String
        description: String
        title: String
        image: String
        link: String
    }
    type Auth {
        token
        user: User
    }
    type inputBook {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: inputBook): User
        removeBook(id: String!): User
    }
`;

module.exports = typeDefs;