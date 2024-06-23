import {gql} from '@apollo/client'
export const CREATE_BLOG = gql`
  mutation createBlog($content:String!,$image:String!){
    blog:createBlog(content:$content,image:$image)
  }
`
export const CREATE_PRODUCT = gql`
  mutation createProduct($content:String!,$image:String!,$price:String!,$title:String!){
    product:createProduct(content:$content,image:$image,price:$price,title:$title)
  }
`
export const CREATE_REVIEW = gql`
  mutation createReview($image:String!,$title:String!){
    review:createReview(image:$image,title:$title)
  }
`

export const CREATE_BOOKING = gql`
  mutation createBooking($selectedDate:String!,$selectedTime:String!){
    booking:createBooking(selectedDate:$selectedDate,selectedTime:$selectedTime)
  }
`
export const DELETE_BLOG = gql`
      mutation deleteBlog($content:String!){
        deleteBlog(content:$content)
      }
`

export const DELETE_PRODUCT = gql`
      mutation deleteProduct($title:String!){
        deleteProduct(title:$title)
      }
`
export const DELETE_REVIEW = gql`
  mutation deleteReview($title:String!){
    deleteReview(title:$title)
  }
`