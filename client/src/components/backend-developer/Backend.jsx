// client/src/backend-developer/Backend.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Menu, MenuItem, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 This component represents the page dedicated to Backend Developers. It provides information
 about the responsibilities, skills, career paths, and resources relevant to backend development.
 Users can learn about technologies like Node.js, Express.js, and database management, and find
 educational resources and career progression advice.
 **/
const BackendDeveloperPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for anchor element of menu

  // Function to handle scrolling to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Function to handle showing/hiding the Back to Top button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    };
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Open menu
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close menu
  };

  const shareContent = (platform) => {
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        break;
      case 'reddit':
        shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(window.location.href)}`;
        break;
      case 'pinterest':
        shareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
        break;
      // Add more cases for other platforms as needed
      default:
        alert(`Share on ${platform} functionality to be implemented`);
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank'); // Open new tab with the share URL
    }

    handleMenuClose(); // Close the menu after sharing
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <Box mt={4}>
          <Typography variant="h3" gutterBottom style={{ fontWeight: 600 }}>
            Backend Developer
          </Typography>
          <Box mt={2} mb={4} display="flex" justifyContent="flex-start">
            <Button
              variant="contained"
              startIcon={<ShareIcon />}
              style={{ backgroundColor: '#007BFF', color: '#FFF', marginRight: '2px' }}
              size="medium"
              onClick={handleMenuOpen} // Open the sharing menu
            >
              Share
            </Button>
            <Button
              variant="contained"
              startIcon={<FileCopyIcon />}
              style={{ backgroundColor: '#007BFF', color: '#FFF', marginLeft: '2px' }}
              size="medium"
              onClick={copyLink} // Copy the link to clipboard
            >
              Copy Link
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => shareContent('twitter')}>Twitter</MenuItem>
              <MenuItem onClick={() => shareContent('facebook')}>Facebook</MenuItem>
              <MenuItem onClick={() => shareContent('reddit')}>Reddit</MenuItem>
              <MenuItem onClick={() => shareContent('pinterest')}>Pinterest</MenuItem>
              <MenuItem onClick={() => shareContent('linkedin')}>LinkedIn</MenuItem>                        
            </Menu>   
          </Box>
          <Typography variant="body1" paragraph>
            Backend developers focus on server-side development and database management. They work with technologies like Node.js, Express.js, and MongoDB to build scalable and efficient applications.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Backend Developer</li>
            <li>Node.js Developer</li>
            <li>Database Administrator</li>
            <li>API Developer</li>
            <li>Server-side Engineer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Building server-side logic using Node.js and Express.js.</li>
            <li>Designing and developing APIs for frontend integration.</li>
            <li>Managing databases such as MongoDB, PostgreSQL, or MySQL.</li>
            <li>Ensuring scalability, performance, and security of backend applications.</li>
            <li>Integrating external services and APIs.</li>
            <li>Version control using Git and working in collaborative environments.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in JavaScript and asynchronous programming.</li>
            <li>Experience with Node.js and Express.js frameworks.</li>
            <li>Knowledge of databases and ORM libraries (e.g., Mongoose, Sequelize).</li>
            <li>Understanding of RESTful APIs and GraphQL.</li>
            <li>Security best practices for web development.</li>
            <li>Ability to write clean, maintainable code and follow coding standards.</li>
            <li>Familiarity with cloud platforms like AWS or Azure is a plus.</li>
            <li>Problem-solving skills and attention to detail.</li>
            <li>Good communication and collaboration skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Backend development offers various paths for specialization and career advancement. Here are common stages in a backend developer's career progression:
          </Typography>
          <ul>
            <li><strong>Junior Backend Developer:</strong> Entry-level position focusing on learning backend technologies and APIs.</li>
            <li><strong>Mid-Level Backend Developer:</strong> Takes on more complex projects, handles database management, and leads backend integration.</li>
            <li><strong>Senior Backend Developer:</strong> Leads backend architecture, makes technical decisions, and mentors junior developers.</li>
            <li><strong>Technical Lead or Backend Architect:</strong> Designs scalable backend systems, oversees technical strategy, and ensures best practices.</li>
            <li><strong>Backend Manager or Director:</strong> Manages backend development teams, oversees project delivery, and contributes to organizational strategy.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
            <li><strong>Junior Backend Developer:</strong> $66K - $124K/yr</li>
            <li><strong>Mid-Level Backend Developer:</strong> $75K - $139K/yr</li>
            <li><strong>Senior Backend Developer:</strong> $81K - $151K/yr</li>
            <li><strong>Technical Lead or Backend Architect:</strong> $86K - $160K/yr</li>
            <li><strong>Backend Manager or Director:</strong> $160K+/yr</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Backend development is crucial for building robust and scalable web applications. It enables data management, business logic implementation, and seamless integration with frontend technologies, driving innovation across industries.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Backend Developer
          </Typography>
          <ul>
            <li>Master server-side programming languages like JavaScript (Node.js), Python (Django, Flask), or Java (Spring).</li>
            <li>Learn about databases and data modeling, including SQL and NoSQL databases.</li>
            <li>Practice building RESTful APIs and understanding API design principles.</li>
            <li>Understand security concepts and implement best practices for web applications.</li>
            <li>Explore cloud platforms for deployment and scalability.</li>
            <li>Build a portfolio of backend projects to showcase your skills.</li>
            <li>Participate in open-source projects or contribute to backend libraries/frameworks.</li>
            <li>Stay updated with industry trends and advancements in backend technologies.</li>
            <li>Network with other developers and attend backend development conferences or meetups.</li>
            <li>Continuous learning and improvement through online courses, tutorials, and certifications.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a backend developer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start by learning the basics of server-side programming, focusing on JavaScript with Node.js. Build small applications and APIs to apply your knowledge.</li>
            <li><strong>Interactive Learning:</strong> Utilize online platforms like Udemy, Coursera, or Pluralsight to learn Node.js, Express.js, and database management interactively through courses and guided projects.</li>
            <li><strong>Master a Backend Framework:</strong> Choose a backend framework like Express.js and dive deep into its core concepts, middleware, and routing mechanisms. Build projects to solidify your understanding.</li>
            <li><strong>Database Management:</strong> Gain practical experience with databases such as MongoDB or PostgreSQL. Learn about data modeling, querying, and performance optimization techniques.</li>
            <li><strong>API Development:</strong> Practice designing and developing RESTful APIs using best practices for routing, authentication, and data validation. Implement CRUD operations and handle asynchronous operations effectively.</li>
            <li><strong>Security Best Practices:</strong> Study web security principles and implement measures like input validation, authentication, and authorization to protect backend applications from common vulnerabilities.</li>
            <li><strong>Deployment and Scalability:</strong> Explore cloud platforms like AWS or Azure for deploying and scaling backend applications. Learn about containerization and serverless architectures for efficient resource management.</li>
            <li><strong>Build a Portfolio:</strong> Showcase your backend development skills through a portfolio of projects. Include projects that demonstrate your ability to solve real-world problems and handle complex backend tasks.</li>
            <li><strong>Contribute to Open Source:</strong> Participate in open-source projects related to backend development. Collaborate with experienced developers, gain feedback, and improve your coding practices.</li>
            <li><strong>Stay Updated:</strong> Follow blogs, forums, and podcasts to stay informed about the latest trends, tools, and best practices in backend development. Attend webinars, conferences, or meetups to network with professionals and expand your knowledge.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" target="_blank" rel="noopener noreferrer">Udemy - The Complete Node.js Developer Course</a> - Comprehensive course covering Node.js fundamentals and backend development.</li>
            <li><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - The Complete 2024 Web Development Bootcamp</a> - Learn to build APIs using Node.js and Express.js.</li>
            <li><a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - Node.js, Express, MongoDB & More: The Complete Bootcamp</a> - Dive into MongoDB and NoSQL database management.</li>
          </ul>
          
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books:
          </Typography>
          <ul>
            <li><strong>"Node.js Design Patterns" by Mario Casciar</strong> - Explore advanced design patterns for Node.js applications.</li>
            <li><strong>"MongoDB: The Definitive Guide" by Kristina Chodoro</strong> - Comprehensive guide to MongoDB database management.</li>
            <li><strong>"Clean Code: A Handbook of Agile Software Craftsmanship" by Robert C. Marti</strong> - Learn best practices for writing clean and maintainable code.</li>
          </ul>
        </Box>

        {showBackToTop && (
          <Fab
            color="primary"
            aria-label="scroll back to top"
            onClick={handleScrollToTop}
            style={{ position: 'fixed', bottom: '16px', right: '16px' }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default BackendDeveloperPage;