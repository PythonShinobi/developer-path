// client/src/iot-developer/IoTDeveloperPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Menu, MenuItem, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Reddit, X, Facebook, Pinterest, LinkedIn } from '@mui/icons-material';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 * IoTDeveloperPage Component
 * 
 * This component renders information about IoT development,
 * including job titles, responsibilities, skills, career progression,
 * and study methods. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const IoTDeveloperPage = () => {
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

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
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
          <Typography variant="h3" gutterBottom style={{ fontWeight: 600, fontFamily: 'Arial, sans-serif' }}>
            IoT Developer
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
              <MenuItem onClick={() => shareContent('twitter')}><X /></MenuItem>
              <MenuItem onClick={() => shareContent('facebook')}><Facebook /></MenuItem>
              <MenuItem onClick={() => shareContent('reddit')}><Reddit /></MenuItem>
              <MenuItem onClick={() => shareContent('pinterest')}><Pinterest /></MenuItem>
              <MenuItem onClick={() => shareContent('linkedin')}><LinkedIn /></MenuItem>
            </Menu>
          </Box>
          <Typography variant="body1" paragraph>
            IoT (Internet of Things) developers design and implement solutions that connect devices to the internet and enable communication between them. They work with sensors, hardware, and software to create innovative IoT applications.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>IoT Developer</li>
            <li>IoT Solutions Architect</li>
            <li>Embedded Systems Engineer</li>
            <li>Firmware Engineer</li>
            <li>IoT Systems Engineer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Design and develop IoT solutions and applications.</li>
            <li>Work with sensors, microcontrollers, and connectivity technologies.</li>
            <li>Develop and implement firmware and software for IoT devices.</li>
            <li>Ensure seamless integration of IoT devices with cloud platforms.</li>
            <li>Optimize performance and reliability of IoT systems.</li>
            <li>Collaborate with cross-functional teams to deliver IoT solutions.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in programming languages such as C, C++, and Python.</li>
            <li>Experience with microcontrollers and sensors.</li>
            <li>Knowledge of communication protocols like MQTT, HTTP, and CoAP.</li>
            <li>Experience with cloud platforms like AWS IoT or Azure IoT.</li>
            <li>Understanding of data security and privacy concerns in IoT.</li>
            <li>Ability to work with embedded systems and firmware development.</li>
            <li>Problem-solving skills and attention to detail.</li>
            <li>Good communication and collaboration skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            IoT development offers various paths for specialization and career advancement. Here are common stages in an IoT developer's career progression:
          </Typography>
          <ul>
            <li><strong>Junior IoT Developer:</strong> Entry-level position focusing on learning and implementing IoT technologies.</li>
            <li><strong>Mid-Level IoT Developer:</strong> Takes on more complex projects, leads smaller teams, and mentors junior developers.</li>
            <li><strong>Senior IoT Developer:</strong> Leads IoT projects, makes architectural decisions, and ensures high-quality code standards.</li>
            <li><strong>Technical Lead or IoT Architect:</strong> Responsible for technical strategy, guiding teams, and implementing best practices across IoT projects.</li>
            <li><strong>IoT Manager or Director:</strong> Manages IoT development teams, oversees multiple projects, and contributes to organizational strategy.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
            <li><strong>Junior IoT Developer:</strong> $0K - $85K/yr</li>
            <li><strong>Mid-Level IoT Developer:</strong> $85K - $110K/yr</li>
            <li><strong>Senior IoT Developer:</strong> $110K - $130K/yr</li>
            <li><strong>Technical Lead or IoT Architect:</strong> $130K - $152K/yr</li>
            <li><strong>IoT Manager or Director:</strong> $152K+/yr</li>
          </ul>

          <Typography variant="body2" color="textSecondary">
            Salary ranges sourced from devitjobs&nbsp;
            <a href="https://devitjobs.com/salaries/IoT/all/all/all">IoT developer salaries</a>
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become an IoT developer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start with basic tutorials on IoT concepts and hardware. Build simple IoT projects to apply your knowledge.</li>
            <li><strong>Interactive Learning:</strong> Use online platforms like Coursera, Udemy, or edX to learn IoT through interactive courses and projects.</li>
            <li><strong>Master IoT Platforms:</strong> Choose popular IoT platforms like Arduino or Raspberry Pi. Follow tutorials to understand their components and development environments.</li>
            <li><strong>Networking and Protocols:</strong> Learn about IoT networking protocols such as MQTT, CoAP, and HTTP. Practice implementing these protocols in your projects.</li>
            <li><strong>Security:</strong> Study IoT security principles and best practices. Understand how to secure your IoT devices and data.</li>
            <li><strong>Build Projects:</strong> Create a portfolio of IoT projects that demonstrate your skills. Start with basic projects and gradually tackle more complex ones.</li>
            <li><strong>Contribute to Open Source:</strong> Engage with open-source IoT projects to gain experience, collaborate with other developers, and expand your network.</li>
            <li><strong>Stay Updated:</strong> Follow industry news, blogs, and forums to keep up with the latest trends and technologies in IoT.</li>
            <li><strong>Specialize and Network:</strong> Consider specializing in areas like smart home technology or industrial IoT. Attend industry conferences and meetups to network with professionals.</li>
            <li><strong>Continuous Improvement:</strong> Always look for opportunities to improve your skills and knowledge. Seek feedback on your projects and learn from your experiences.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="https://www.udemy.com/course/complete-guide-to-build-iot-things-from-scratch-to-market/" target="_blank" rel="noopener noreferrer">Udemy - Complete Guide to Build IOT Things from Scratch to Market</a></li>
            <li><a href="https://www.udemy.com/course/iot-with-python/" target="_blank" rel="noopener noreferrer">Udemy - Internet of Things with Python Programming</a></li>
            <li><a href="https://www.udemy.com/course/micropython/" target="_blank" rel="noopener noreferrer">Udemy - MicroPython and the Internet of Things</a></li>
          </ul>

          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books:
          </Typography>
          <ul>
            <li><strong>"Getting Started with Arduino" by Massimo Banzi</strong> - A practical guide to learning Arduino and building IoT projects.</li>
            <li><strong>"Designing Connected Products: UX for the Consumer Internet of Things" by Claire Rowland</strong> - Insights into designing user experiences for IoT products.</li>
            <li><strong>"Practical Internet of Things Security" by Brian Russell and Drew Van Duren</strong> - Learn about securing IoT devices and networks.</li>
          </ul>
        </Box>
      </Container>

      {showBackToTop && (
        <Fab
          color="primary"
          aria-label="back to top"
          onClick={handleScrollToTop}
          style={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}

      <Footer />
    </div>
  );
};

export default IoTDeveloperPage;