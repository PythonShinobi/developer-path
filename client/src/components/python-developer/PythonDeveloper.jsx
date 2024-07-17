// client/src/components/python-developer/PythonDevloper.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Menu, MenuItem, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

const PythonDeveloperPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for anchor element of menu

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
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
            Python Developer
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
            Python developers are responsible for writing and testing code, debugging programs, and integrating applications with third-party web services. They are also involved in server-side web application logic and integration of the work front-end developers do.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Python Developer</li>
            <li>Backend Developer</li>
            <li>Software Engineer</li>
            <li>Data Engineer</li>
            <li>Machine Learning Engineer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Writing reusable, testable, and efficient code.</li>
            <li>Designing and implementing low-latency, high-availability, and performant applications.</li>
            <li>Integrating user-facing elements developed by front-end developers with server-side logic.</li>
            <li>Implementing security and data protection.</li>
            <li>Integrating data storage solutions, including databases, key-value stores, blob stores, etc.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in Python programming.</li>
            <li>Familiarity with some ORM (Object Relational Mapper) libraries.</li>
            <li>Understanding of the threading limitations of Python, and multi-process architecture.</li>
            <li>Understanding of accessibility and security compliance.</li>
            <li>Knowledge of user authentication and authorization between multiple systems, servers, and environments.</li>
            <li>Understanding of fundamental design principles behind a scalable application.</li>
            <li>Familiarity with event-driven programming in Python.</li>
            <li>Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3.</li>
            <li>Strong unit test and debugging skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Python development offers numerous opportunities for career advancement. Here are common stages in a Python developer's career progression:
          </Typography>
          <ul>
            <li><strong>Junior Python Developer:</strong> Entry-level position focusing on learning and implementing Python code under supervision.</li>
            <li><strong>Mid-Level Python Developer:</strong> Takes on more complex projects, leads smaller teams, and mentors junior developers.</li>
            <li><strong>Senior Python Developer:</strong> Leads Python projects, makes architectural decisions, and ensures high-quality code standards.</li>
            <li><strong>Technical Lead or Python Architect:</strong> Responsible for technical strategy, guiding teams, and implementing best practices across projects.</li>
            <li><strong>Development Manager or Director:</strong> Manages development teams, oversees multiple projects, and contributes to organizational strategy.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
            <li><strong>Junior Python Developer:</strong> $75K - $134K/yr</li>
            <li><strong>Mid-Level Python Developer:</strong> $85K - $151K/yr</li>
            <li><strong>Senior Python Developer:</strong> $97K - $169K/yr</li>
            <li><strong>Technical Lead or Python Architect:</strong> $105K - $184K/yr</li>
            <li><strong>Python Manager or Director:</strong> $184K+/yr</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Python development is highly sought-after due to the language's versatility, ease of learning, and wide range of applications in web development, data science, automation, and more. This demand translates into numerous job opportunities and career growth potential.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Python Developer
          </Typography>
          <ul>
            <li>Learn the basics of Python programming and practice coding regularly.</li>
            <li>Study Python frameworks like Django, Flask, or Pyramid.</li>
            <li>Understand database management with SQL and NoSQL databases.</li>
            <li>Build Python projects to showcase your skills.</li>
            <li>Collaborate on open-source projects or contribute to community forums.</li>
            <li>Stay updated with the latest trends and best practices in Python development.</li>
            <li>Network with other developers and attend conferences or workshops.</li>
            <li>Continuously improve your problem-solving and debugging skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a Python developer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start by learning the basics of Python through tutorials and courses. Apply what you learn by building simple applications.</li>
            <li><strong>Interactive Learning:</strong> Use online platforms like Codecademy, FreeCodeCamp, or Udemy to learn Python interactively. These platforms provide hands-on exercises and projects to reinforce your learning.</li>
            <li><strong>Master a Python Framework:</strong> Choose a popular framework such as Django or Flask. Follow tutorials and build projects to understand its core concepts and architecture.</li>
            <li><strong>Database Management:</strong> Study relational and non-relational databases. Practice designing and interacting with databases using SQL and NoSQL technologies.</li>
            <li><strong>Build Python Projects:</strong> Develop a portfolio of Python projects that showcase your skills. Start with small projects and gradually increase complexity to demonstrate your ability to handle real-world scenarios.</li>
            <li><strong>Contribute to Open Source:</strong> Participate in open-source projects related to Python development. This allows you to collaborate with experienced developers, gain practical experience, and build a professional network.</li>
            <li><strong>Stay Updated:</strong> Follow industry blogs, podcasts, and forums to stay informed about the latest trends, tools, and best practices in Python development. Experiment with new technologies and frameworks to keep your skills up to date.</li>
            <li><strong>Join Developer Communities:</strong> Engage with online communities such as Stack Overflow, GitHub, and Reddit. Seek help, share knowledge, and collaborate with other developers to enhance your learning experience.</li>
            <li><strong>Attend Workshops and Meetups:</strong> Participate in local or online workshops, hackathons, and meetups focused on Python development. These events provide opportunities to learn from experts, network with peers, and gain practical insights.</li>
            <li><strong>Read Documentation:</strong> Familiarize yourself with official documentation for Python and its frameworks. This helps you understand the language's features, libraries, and best practices.</li>
            <li><strong>Continuous Learning:</strong> Dedicate time to learning new concepts, exploring advanced topics, and improving your problem-solving skills. Regularly practice coding challenges and algorithmic problems to sharpen your abilities.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <Typography variant="body1" paragraph>
            Here are some recommended study resources to help you become a Python developer:
          </Typography>
          <ul>
            <li><a href="https://www.udemy.com/course/complete-python-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - Complete Python Bootcamp</a> The Complete Python Bootcamp From Zero to Hero in Python</li>
            <li><a href="https://www.udemy.com/course/100-days-of-code/" target="_blank" rel="noopener noreferrer">Udemy - 100 Days of Code: The Complete Python Pro Bootcamp</a> - Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</li>
            <li><a href="https://realpython.com/" target="_blank" rel="noopener noreferrer">Real Python</a> (Real Python)</li>
            <li><a href="https://docs.djangoproject.com/en/stable/" target="_blank" rel="noopener noreferrer">Django Documentation</a> (Django)</li>
            <li><a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank" rel="noopener noreferrer">Flask Documentation</a> (Flask)</li>
            <li><a href="https://www.sqlalchemy.org/" target="_blank" rel="noopener noreferrer">SQLAlchemy Documentation</a> (SQLAlchemy)</li>            
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books
          </Typography>
          <ul>
            <li><strong>Automate the Boring Stuff with Python</strong> by Al Sweigart</li>
            <li><strong>Invent Your Own Computer Games with Python</strong> by Al Sweigart</li>
            <li><strong>Cracking Codes with Python</strong> by Al Sweigart</li>
            <li><strong>Making Games with Python & Pygame</strong> by Al Sweigart</li>
            <li><strong>Python for Data Analysis</strong> by Wes McKinney</li>
            <li><strong>Fluent Python</strong> by Luciano Ramalho</li>
            <li><strong>Effective Python: 59 Specific Ways to Write Better Python</strong> by Brett Slatkin</li>
          </ul>
        </Box>
        
        {showBackToTop && (
        <Fab
        color="primary"
        size="small"
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

export default PythonDeveloperPage;