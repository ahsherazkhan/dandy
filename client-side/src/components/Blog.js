import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT, DELETE_BLOG, CREATE_BLOG, CREATE_PRODUCT, CREATE_REVIEW , DELETE_REVIEW } from "../gqloperations/mutations";
import { Booking } from "./Booking";

export const BlogForm = () => {
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [deleteContent,setDeleteContent] = useState("");
  const [deletePrdContent,setDeletePrdContent] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [delreview, setDelReviewTitle] = useState("");



  const [createBlog, { loading: loadingBlog, error: errorBlog }] = useMutation(CREATE_BLOG);
  const [createProduct, { loading: loadingProduct, error: errorProduct }] = useMutation(CREATE_PRODUCT);
  const [deleteBlog, { loading: loadingDeleteBlog, error: errorDeleteBlog }] = useMutation(DELETE_BLOG);
  const [deleteProd, { loading: loadingDeleteProd, error: errorDeleteProd }] = useMutation(DELETE_PRODUCT);
  const [createReview, { loading: loadingReview, error: errorReview }] = useMutation(CREATE_REVIEW);
  const [deleteReview, { loading: loadingDeleteReview, error: errorDeleteReview }] = useMutation(DELETE_REVIEW);



  const handleReviewTitleChange = (event) => {
    setReview(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleDeleteContent = (event) => {
    setDeleteContent(event.target.value);
  };

  const handleDeletePrd = (event) => {
    setDeletePrdContent(event.target.value);
  };

  const handleDeleteReview = (event) => {
    setDelReviewTitle(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error Occuring", error);
    };
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
          const deleteContentFirst15 = deleteContent.substring(0, 15);

      const response = await deleteBlog({
        variables: {
          content: deleteContentFirst15,
        },
      });
      window.alert("Blog has been deleted"); // log the response data
      console.log("dddddd",response.data); // log the response data
    } catch (error) {
      window.alert("No blogs found with the provided content.");
      console.error("Error deleting blog:", error.message);
    }
  };

  const handleProdDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await deleteProd({
        variables: {
          title: deletePrdContent,
        },
      });
      window.alert("Product has been deleted"); // log the response data
      console.log(response.data); // log the response data
    } catch (error) {
      window.alert("No Product found with the provided title.");
      console.error("Error deleting product:", error.message);
    }
  };

  const handleRevDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await deleteReview({
        variables: {
          title: delreview,
        },
      });
      window.alert("Review has been deleted"); // log the response data
      console.log(response.data); // log the response data
    } catch (error) {
      window.alert("No Review found with the provided title.");
      console.error("Error deleting revoew:", error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createBlog({
        variables: {
          content: content,
          image: image,
        },
      });
      window.alert("Blog has been created"); // log the response data
      console.log(response.data); // log the response data
    } catch (error) {
      console.error("Error creating blog:", error.message);
    }
  };

  const handlePrdSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createProduct({
        variables: {
          content: content,
          image: image,
          price: price,
          title: title,
        },
      });
      window.alert("Product has been created"); // log the response data
      console.log(response.data); // log the response data
    } catch (error) {
      console.error("Error creating blog:", error.message);
    }
  };

  const handleRevSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createReview({
        variables: {
          image: image,
          title: review,
        },
      });
      window.alert("Review has been created"); // log the response data
      console.log(response.data); // log the response data
    } catch (error) {
      console.error("Error creating review:", error.message);
    }
  };

  if (loadingBlog || loadingProduct || loadingDeleteBlog || loadingDeleteProd || loadingReview || loadingDeleteReview) {
    return <h1>Loading</h1>;
  }

  // Render error messages
  if (errorBlog || errorProduct || errorDeleteBlog || errorDeleteProd || errorReview || errorDeleteReview) {
    return <h1>Error: {errorBlog || errorProduct || errorDeleteBlog || errorDeleteProd || errorReview || errorDeleteReview}</h1>;
  }

  return (
    <>
    <div style={{ marginTop: '150px', padding: '20px' }} className="container">
      <div className="row justify-content-center my-3">
        <div className="col-12 col-md-8 col-lg-6 border border-2 border-secondary rounded-lg p-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="blog" style={{ marginBottom: '10px' }}>Enter Blog Content:</label>
              <textarea
                onChange={handleContentChange}
                placeholder="Type Here..."
                className="form-control"
                rows="5"
                id="blog"
                required
                style={{ borderRadius: '8px', borderColor: '#ced4da' }}
              ></textarea>
            </div>
            <div>
              <label htmlFor="image" style={{ marginBottom: '10px', display: 'block' }}>Upload Image:</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                required
                style={{ borderRadius: '8px', borderColor: '#ced4da', padding: '8px' }}
              />
            </div>

            <div className="text-center my-4">
              <button className="btn btn-primary" style={{ padding: '10px 30px', borderRadius: '8px', fontSize: '16px' }}>Submit</button>
            </div>
          </form>
          
        </div>
        <div style={{ marginTop: '150px', padding: '20px' }} className="container">
          <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 border border-2 border-secondary rounded-lg p-4">
            <p>Enter the content of the blog which you want to delete:</p>
            <textarea
                      onChange={handleDeleteContent}
                      placeholder="Type Here..."
                      className="form-control"
                      rows="5"
                      id="blog"
                      required
                      style={{ borderRadius: '8px', borderColor: '#ced4da' }} 
                    ></textarea>
            <div className="text-center my-4">
                    <button className="btn btn-primary" onClick={handleDelete} style={{ padding: '10px 30px', borderRadius: '8px', fontSize: '16px' }}>delete</button>
                  </div>
                  </div>
                  </div>
           </div>
          <div className="col-12 col-md-8 col-lg-6 border border-2 border-secondary rounded-lg p-4">
            <form onSubmit={handlePrdSubmit}>
            <div className="form-group">
              <label htmlFor="blog" style={{ marginBottom: '10px' }}>Enter Product Description:</label>
              <textarea
                onChange={handleContentChange}
                placeholder="Type Here..."
                className="form-control"
                rows="5"
                id="blog"
                required
                style={{ borderRadius: '8px', borderColor: '#ced4REVIEWda' }}
              ></textarea>
            </div>
            <div>
            <label htmlFor="image" style={{ marginBottom: '10px', display: 'block' }}>Enter Product Price:</label>
              <input
                type="text"
                id="text"
                placeholder="Enter Price here..."
                accept="text/*"
                onChange={handlePriceChange}
                required
                style={{ borderRadius: '8px', borderColor: '#ced4da', padding: '8px' }}
              />
              <label htmlFor="image" style={{ marginBottom: '10px', display: 'block' }}>Enter Product Title:</label>
              <input
                type="text"
                id="text"
                placeholder="Enter Title here..."
                accept="text/*"
                onChange={handleTitleChange}
                required
                style={{ borderRadius: '8px', borderColor: '#ced4da', padding: '8px' }}
              />
              <label htmlFor="image" style={{ marginBottom: '10px', display: 'block' }}>Upload Product Image:</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                required
                style={{ borderRadius: '8px', borderColor: '#ced4da', padding: '8px' }}
              />
            </div>

            <div className="text-center my-4">
              <button className="btn btn-primary" style={{ padding: '10px 30px', borderRadius: '8px', fontSize: '16px' }}>Submit</button>
            </div>
           </form>
         </div>
        <div style={{ marginTop: '150px', padding: '20px' }} className="container">
          <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 border border-2 border-secondary rounded-lg p-4">
            <p>Enter the Product title you want to delete:</p>
            <textarea
              onChange={handleDeletePrd}
              placeholder="Type Here..."
              className="form-control"
              rows="5"
              id="blog"
              required
              style={{ borderRadius: '8px', borderColor: '#ced4da' }}
            ></textarea>
                  <div className="text-center my-4">
                    <button className="btn btn-primary" onClick={handleProdDelete} style={{ padding: '10px 30px', borderRadius: '8px', fontSize: '16px' }}>delete</button>
                  </div>
                  </div>
                  </div>
           </div>
           <div className="col-12 col-md-8 col-lg-6 border border-2 border-secondary rounded-lg p-4">
            <form onSubmit={handleRevSubmit}>
            <div className="form-group">
            </div>
            <div>
              <label htmlFor="image" style={{ marginBottom: '10px', display: 'block' }}>Enter Review Title:</label>
              <input
                type="text"
                id="text"
                placeholder="Enter Title here..."
                accept="text/*"
                onChange={handleReviewTitleChange}
                required
                style={{ borderRadius: '8px', borderColor: '#ced4da', padding: '8px' }}
              />
              <label htmlFor="image" style={{ marginBottom: '10px', display: 'block' }}>Upload Product Image:</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                required
                style={{ borderRadius: '8px', borderColor: '#ced4da', padding: '8px' }}
              />
            </div>

            <div className="text-center my-4">
              <button className="btn btn-primary" style={{ padding: '10px 30px', borderRadius: '8px', fontSize: '16px' }}>Submit</button>
            </div>
           </form>
         </div>
        <div style={{ marginTop: '150px', padding: '20px' }} className="container">
          <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 border border-2 border-secondary rounded-lg p-4">
            <p>Enter the Review title you want to delete:</p>
            <textarea
              onChange={handleDeleteReview}
              placeholder="Type Here..."
              className="form-control"
              rows="5"
              id="blog"
              required
              style={{ borderRadius: '8px', borderColor: '#ced4da' }}
            ></textarea>
                  <div className="text-center my-4">
                    <button className="btn btn-primary" onClick={handleRevDelete} style={{ padding: '10px 30px', borderRadius: '8px', fontSize: '16px' }}>delete</button>
                  </div>
                  </div>
                  </div>
           </div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Booking isPropTrue={true}/>
    </div>
    </>
  );
};

export default BlogForm;
