
import mongoose from 'mongoose'

const Blog = mongoose.model("Blog")
const Booking = mongoose.model("Booking")
const Product = mongoose.model("Product")
const Review = mongoose.model("Review")

const resolvers = {
    Query:{
        blogs: async (_, { limit = 10, offset = 0 }) => {
            const blogs = await Blog.find({}).skip(offset).limit(limit);
            return blogs;
        },
        bookings: async (_, { limit = 10, offset = 0 }) => {
            const bookings = await Booking.find({}).skip(offset).limit(limit);
            return bookings;
        },
        products: async (_,) => {
            const products = await Product.find({});
            return products;
        },        
        reviews: async (_, { limit = 10, offset = 0 }) => {
            const reviews = await Review.find({}).skip(offset).limit(limit);
            return reviews;
        }
    },
    Mutation:{
        createBlog:async (_,{content,image})=>{
            console.log("------blog content-------",content)
           const newBlog = new Blog({
               content,
               image 
           })
           await newBlog.save()
           return "Blog saved successfully"
        },

        createReview:async (_,{title,image})=>{
            console.log("------Review title-------",title)
           const newReview = new Review({
               title,
               image 
           })
           await newReview.save()
           return "Review saved successfully"
        },

        deleteReview: async (_, { title }) => {
            try {
                const deleltedReview = await Review.deleteMany({ title });
                if (deleltedReview.deletedCount === 0) {
                    throw new Error("No Review found with the provided title.");
                }
                return "Review(s) deleted successfully";
            } catch (error) {
                throw new Error("Failed to delete Review(s): " + error.message);
            }
        }, 

        deleteBlog: async (_, { content }) => {
            try {
                console.log("content to delete................", content);
                const deletedBlog = await Blog.findOneAndDelete({ content: { $regex: `^${content}` } });
                if (deletedBlog.deletedCount === 0) {
                    throw new Error("No blogs found with the provddddddided content.");
                }
                return "Blog(s) deleted successfully";
            } catch (error) {
                throw new Error("Failed to delete blog(s): " + error.message);
            }
        }, 
        
        deleteProduct: async (_, { title }) => {
            try {
                const deleltedProd = await Product.deleteMany({ title });
                if (deleltedProd.deletedCount === 0) {
                    throw new Error("No products found with the provided content.");
                }
                return "Product(s) deleted successfully";
            } catch (error) {
                throw new Error("Failed to delete product(s): " + error.message);
            }
        }, 
        createProduct:async (_,{content,image,price,title})=>{
            console.log("------prod content-------",content)
           const newPrd = new Product({
               content,
               image,
               price,
               title,
           })
           await newPrd.save()
           return "Product saved successfully"
        },
        createBooking:async (_, { selectedDate, selectedTime }) => {
            try {
              // Create a new booking instance
              const newBooking = new Booking({
                selectedDate,
                selectedTime,
              });
      
              // Save the booking instance to the database
              await newBooking.save();
              return "Booking saved successfully"
            } catch (error) {
              throw new Error('Failed to create booking',error);
            }
        },
    }
}

export default resolvers;
