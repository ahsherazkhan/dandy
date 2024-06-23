import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import { styled } from '@mui/material/styles';
import { Container } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { GET_ALL_REVIEW } from "../gqloperations/queries";
import { useMemo } from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.text.primary,
    position: 'relative', // To position the content over the image
    '& .MuiCardMedia-root': {
      height: 280, // Adjust the height of the image
    },
    '&:hover .MuiCardContent-root': { // Only show the content when the card is hovered
      opacity: 1,
      transition: 'opacity 0.3s ease-in-out',
    },
    '& .MuiCardContent-root': {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      color: 'white', // Change text color to white
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background for readability
      opacity: 0, // Hide by default
      transition: 'opacity 0.3s ease-in-out',
    },
  }));

const Review = () => {
    const { loading, error, data } = useQuery(GET_ALL_REVIEW);
  
    // Memoize the extracted array
    const extractedArray = useMemo(() => data?.reviews || [], [data]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const responsive = {
      superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };
    return (
      <div className='skill'>
        {extractedArray.length > 0 && (
          <Container style={{ marginTop: '148px', maxWidth: '1600px' }}>
            <Typography variant="h3" component="h3" gutterBottom>
              See our previous work:
            </Typography>
            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              {extractedArray.map((review) => (
                <StyledCard key={review.id}>
                  <CardMedia
                    component="img"
                    image={review.image}
                    alt={review.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      {review.title}
                    </Typography>
                  </CardContent>
                </StyledCard>
              ))}
            </Carousel>
          </Container>
        )}
      </div>
    );
  };
export default Review;