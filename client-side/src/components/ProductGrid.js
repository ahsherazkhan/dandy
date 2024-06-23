import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Container } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../gqloperations/queries";
// Styling the Card to set image size
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  color: theme.palette.text.primary,
  '& .MuiCardMedia-root': {
    height: 280, // Adjust the height of the image
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Change the background color
  color: theme.palette.primary.contrastText, // Change the text color
  '&:hover': {
    backgroundColor: theme.palette.primary.dark, // Change the background color on hover
  },
}));
const ProductGrid = () => {
  const [expandedContent, setExpandedContent] = useState({});
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  // console.log("blogdatablogdata", data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // Check if blogdata or blogs is undefined
  const extractedArray = data?.products || [];
  
  // State to track whether content is expanded
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // Function to toggle content expansion
  const toggleContent = (index) => {
    setExpandedContent((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const handleSubmit = async (product) => {
      const message = `Hi I want to buy the ${product.title}\n`;
      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = encodeURIComponent("+61455121312");
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.location.href = whatsappLink;
  };
  return (
    <Container style={{ marginTop: '148px', maxWidth: '1600px'}}>
      <Typography variant="h2" component="h2" gutterBottom>
        Our Premium Products
      </Typography>
      { extractedArray &&  <Grid container spacing={2}>
       {extractedArray.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <StyledCard>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                {!expandedContent[index] &&<Typography variant="body2" color="text.secondary" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                  {product.content}
                </Typography>}
                {!expandedContent[index] && (
                  <Button onClick={() => toggleContent(index)}>Read more</Button>
                )}
              {expandedContent[index] && (
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {product.content}
                  </Typography>
                  <Button onClick={() => toggleContent(index)}>Show less</Button>
                </CardContent>
              )}
              </CardContent>
              <CardActions>
                <StyledButton
                  color="primary"
                  className="px-1"
                  onClick={()=> handleSubmit(product)}
                >
                  Buy now
                </StyledButton>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid> }
    </Container>
  );
};
export default ProductGrid;