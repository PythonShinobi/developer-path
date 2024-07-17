// client/src/footer/Footer.jsx
import React from 'react';
import { Container, Typography, Box, Grid, IconButton } from '@mui/material';
import { GitHub, X } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box bgcolor="#263238" color="#FFFFFF" py={4}>
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Social Icons */}
          <Grid item xs={12} textAlign="center">
            <Box display="flex" justifyContent="center" mb={2}>
              <IconButton href="https://github.com/PythonShinobi" target="_blank" rel="noopener noreferrer">
                <GitHub fontSize="large" style={{ color: '#FFFFFF' }} />
              </IconButton>
              <IconButton href="https://twitter.com/PythonShinobi" target="_blank" rel="noopener noreferrer">
                <X fontSize="large" style={{ color: '#FFFFFF' }} />
              </IconButton>              
            </Box>
          </Grid>          
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" gutterBottom>
            © {new Date().getFullYear()} All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
