// client/src/components/contact/Contact.jsx
import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to backend, show success message)
    alert("Form submitted!"); // Replace with actual form submission logic
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Container style={{ flexGrow: 1, paddingBottom: "2rem" }}>
        <Box mt={4} textAlign="center">
          <Typography variant="h3" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" paragraph>
            Have a question or feedback? Reach out to me using the form below:
          </Typography>
          <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto" }}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary">
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