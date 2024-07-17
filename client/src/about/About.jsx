// client/src/components/about/About.jsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const AboutPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Container style={{ flexGrow: 1, paddingBottom: "2rem" }}>
        <Box mt={4}>
          <Typography variant="h3" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            Hello! I'm a passionate individual aiming to assist those who are exploring careers in the tech industry. This website serves as a guide to help you get started, providing valuable resources and insights into various tech careers.
          </Typography>
          <Typography variant="body1" paragraph>
            Each career overview here gives you a glimpse into what the field entails and helps you understand the basics to kickstart your journey.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for visiting and showing interest in the content. If you find this information helpful, could you please consider supporting me by making a donation? Your contribution helps me maintain and improve this resource for everyone.
            And if you have any question or feedback please reach out to me through the contact form.
          </Typography>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="DX247TU7K7NLW" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_KE/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutPage;