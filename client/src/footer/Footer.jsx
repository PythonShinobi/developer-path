// client/src/footer/Footer.jsx
import React from 'react';
import { Container, Typography, Box, Grid, IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

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
              <IconButton href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}>
                <LinkedIn fontSize="large" style={{ color: '#0A66C2' }} />
              </IconButton>
            </Box>
          </Grid>          
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" gutterBottom>
            © {new Date().getFullYear()} Philip. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
