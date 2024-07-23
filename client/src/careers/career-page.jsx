// client/src/career-page/careers.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Fab, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import careerData from '../data/careerData.json';

const CareerPage = () => {
  const navigate = useNavigate();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [visibleData, setVisibleData] = useState(21); // Number of items to show initially

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const loadMoreData = () => {
    setVisibleData(prevVisibleData => prevVisibleData + 21); // Load more items
  };

  return (
    <div>
      <Navbar />
      <Container>        
        <Grid container spacing={4}>
          {careerData.slice(0, visibleData).map((career, index) => (
            <Grid item xs={12} sm={6} md={4} mt={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={career.img}
                  alt={career.title}
                  loading="lazy" // Lazy load images
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {career.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => navigate(career.path)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Add space below last row of cards */}
        <Box mt={4} mb={4} />
        {visibleData < careerData.length && (
          <Box mt={4} textAlign="center">
            <Button variant="contained" color="primary" onClick={loadMoreData}>
              Load More
            </Button>
          </Box>
        )}
        {showBackToTop && (
          <Fab
            color="primary"
            size="small"
            onClick={handleScrollToTop}
            style={{ position: 'fixed', bottom: '16px', right: '16px', backgroundColor: '#007BFF', color: '#FFF' }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default CareerPage;