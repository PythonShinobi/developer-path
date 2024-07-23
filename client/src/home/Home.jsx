// client/src/home/Home.jsx
import React, { useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const HomePage = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Example breakpoint for small screens

  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  return (
    <div>
      <Navbar />
      <Container 
        maxWidth="md" 
        sx={{ 
          py: { xs: 2, sm: 4 }, 
          px: { xs: 1, sm: 4 } 
        }}
      >
        <Box 
          textAlign="center" 
          mb={4}
          sx={{ 
            px: { xs: 2, sm: 4 }, 
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Typography 
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              color: '#212121',
              mb: 2,
              fontSize: { xs: '1.5rem', sm: '2rem' }
            }}
          >
            Welcome to Developer Path
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              textAlign: 'justify', 
              lineHeight: '1.8', 
              mb: 4,
              fontFamily: 'Arial, sans-serif',
              color: '#333',
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            When I was starting out, I didn’t have a clear idea of what I wanted to do— all I knew was that I wanted to program and code. If you’re in the same boat, wondering which path to venture into, this site is for you! 
            <br /><br />
            Developer Path provides a wealth of resources to help you find your way. Whether you're looking for online courses to kickstart your journey, recommended books if you're more of a reader, or study tips and skills required for different tech careers, you'll find it here. 
            <br /><br />
            Not sure which programming languages to learn, or curious about the amount of money you will make? This site will give you insights into all that and more.
            <br /><br />
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#000', 
                fontWeight: 600,
                mb: 1 
              }}
            >
              What Will You Learn?
            </Typography>
            Here, you’ll find a treasure trove of guides, resources, and insights into various tech careers. From fundamental skills to advanced topics, I’ve got you covered.
            <br /><br />
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#000', 
                fontWeight: 600,
                mb: 1 
              }}
            >
              Why the Repetition?
            </Typography>
            You might spot some repetition here and there. Don’t worry, it's not a glitch in the matrix! Tech careers often share similar skills and concepts—just in different flavors. So, while you might see some familiar content, it's all part of the grand adventure in mastering tech. And remember, “Repetition is the mother of learning!” 😂
            <br /><br />
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#000', 
                fontWeight: 600,
                mb: 1 
              }}
            >
              What’s Coming Next?
            </Typography>
            More careers and detailed breakdowns are on the way! Stay tuned as I continue to expand this site with new and exciting content.
            <br /><br />
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#000', 
                fontWeight: 600,
                mb: 1 
              }}
            >
              Got Questions or Feedback?
            </Typography>
            If you’ve got questions or feedback, feel free to use the contact form. And if you don’t see a comment section on the pages, it’s probably because I’m a solo developer with a limited budget (no database yet!). So, if you’re feeling brave and want to send some virtual tomatoes, the contact form is your go-to. I promise, I can handle it! 😂
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={() => navigate('/developer-paths')}
            sx={{ 
              mt: 2,
              mb: 4,
              padding: '12px 24px',
              fontWeight: 600,
              borderRadius: '8px',
              fontSize: { xs: '14px', sm: '16px' },
              color: '#fff',
              backgroundColor: '#1976d2', // Primary color for the button
              '&:hover': {
                backgroundColor: '#1565c0' // Darker shade on hover
              }
            }}
          >
            Go to Paths
          </Button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
