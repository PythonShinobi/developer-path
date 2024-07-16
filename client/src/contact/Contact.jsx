// client/src/components/contact/Contact.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import config from "../config.js"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  useEffect(() => {window.scrollTo(0, 0)});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${config.serverEndpoint}/api/send-email`, formData);
      alert(response.data);      
      setFormData({       // Clear the form fields
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      alert('Failed to send email');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Container style={{ flexGrow: 1, paddingBottom: '2rem' }}>
        <Box mt={4} textAlign='center'>
          <Typography variant='h3' gutterBottom>
            Contact Me
          </Typography>
          <Typography variant='body1' paragraph>
            Have a question or feedback? Reach out to me using the form below:
          </Typography>
          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <TextField
              label='Your Name'
              name='name'
              variant='outlined'
              fullWidth
              margin='normal'
              required
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label='Email Address'
              name='email'
              variant='outlined'
              fullWidth
              margin='normal'
              type='email'
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label='Message'
              name='message'
              variant='outlined'
              fullWidth
              multiline
              rows={4}
              margin='normal'
              required
              value={formData.message}
              onChange={handleChange}
            />
            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactPage;