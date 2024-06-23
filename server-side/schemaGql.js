import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    blogs: [BlogWithName]
    bookings:[AllBookings]
    products: [ProductWithName]
    reviews: [ReviewWithName]
  }

  type BlogWithName {
    content: String
    image: String
  }

  type ProductWithName {
    content: String
    image: String
    price: String
    title: String
  }

  type ReviewWithName {
    image: String
    title: String
  }

  type AllBookings {
    selectedDate: String
    selectedTime: String
  }

  type Blog {
    content: String!
    image: String!
  }

  type Mutation {
    createBlog(content: String!, image: String): String
    createBooking(selectedDate: String!, selectedTime: String!): String
    createProduct(content: String!, image: String, price: String!, title:String!): String
    createReview(image: String, title:String!): String
    deleteReview(title: String!):String
    deleteProduct(title: String!):String
    deleteBlog(content: String!):String
  }
`;

export default typeDefs;
