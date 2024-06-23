import {gql} from '@apollo/client'
export const GET_ALL_BLOGS = gql`
query getAllBlogs{
  blogs{
    content
    image
  }
}
`
export const GET_ALL_PRODUCTS = gql`
query getAllProducts{
  products{
    content
    image
    price
    title
  }
}
`

export const GET_ALL_BOOKINGS = gql`
query getAllBookings{
  bookings{
    selectedDate
    selectedTime
  }
}
`

export const GET_ALL_REVIEW = gql`
query getAllReviews{
  reviews {
    image
    title
  }
}`;