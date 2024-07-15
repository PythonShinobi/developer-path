// client/src/frontend-developer/Frontend.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import GetAppIcon from '@mui/icons-material/GetApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

/**
 * FrontendDeveloperPage Component
 * 
 * This component renders information about frontend development,
 * including job titles, responsibilities, skills, career progression,
 * and study methods. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const FrontendDeveloperPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  useEffect(() => {
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
            Frontend Developer
          </Typography>
          <Box mt={2} mb={4} display="flex" justifyContent="flex-start">
            <Button
              variant="contained"
              startIcon={<ShareIcon />}
              style={{ backgroundColor: '#007BFF', color: '#FFF', marginRight: '8px' }}
              size="small"
              onClick={() => alert('Share functionality to be implemented')}
            >
              Share
            </Button>
            <Button
              variant="contained"
              startIcon={<GetAppIcon />}
              style={{ backgroundColor: '#007BFF', color: '#FFF' }}
              size="small"
              onClick={() => alert('Download functionality to be implemented')}
            >
              Download
            </Button>
          </Box>
          <Typography variant="body1" paragraph>
            Frontend developers specialize in creating the visual and interactive aspects of websites and web applications. They use technologies like React and Material-UI to build responsive and intuitive user interfaces.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Frontend Developer</li>
            <li>React Developer</li>
            <li>UI Developer</li>
            <li>Web Developer (Frontend)</li>
            <li>JavaScript Developer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Implementing User Interfaces using React and Material-UI components.</li>
            <li>Collaborating with designers and backend developers.</li>
            <li>Optimizing performance and ensuring cross-browser compatibility.</li>
            <li>Version control using Git and working in teams.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in HTML, CSS, and JavaScript (ES6+).</li>
            <li>Experience with React.js and its core principles.</li>
            <li>Knowledge of state management libraries like Redux or Context API.</li>
            <li>Understanding of responsive design and mobile-first principles.</li>
            <li>Ability to write clean, maintainable code and follow coding standards.</li>
            <li>Familiarity with version control systems (e.g., Git).</li>
            <li>Problem-solving skills and attention to detail.</li>
            <li>Good communication and collaboration skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Frontend development offers various paths for specialization and career advancement. Here are common stages in a frontend developer's career progression:
          </Typography>
          <ul>
            <li><strong>Junior Frontend Developer:</strong> Entry-level position focusing on learning and implementing frontend technologies.</li>
            <li><strong>Mid-Level Frontend Developer:</strong> Takes on more complex projects, leads smaller teams, and mentors junior developers.</li>
            <li><strong>Senior Frontend Developer:</strong> Leads frontend projects, makes architectural decisions, and ensures high-quality code standards.</li>
            <li><strong>Technical Lead or Frontend Architect:</strong> Responsible for technical strategy, guiding teams, and implementing best practices across projects.</li>
            <li><strong>Frontend Manager or Director:</strong> Manages frontend development teams, oversees multiple projects, and contributes to organizational strategy.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Frontend development is in high demand due to the increasing reliance on web applications across industries. Technologies like React and Material-UI streamline development and offer opportunities for career growth and creative freedom.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Frontend Developer
          </Typography>
          <ul>
            <li>Learn HTML, CSS, and JavaScript thoroughly.</li>
            <li>Master a frontend framework such as React, Vue.js, or Angular.</li>
            <li>Understand state management with Redux or Context API.</li>
            <li>Practice responsive design and mobile-first development.</li>
            <li>Build several projects to showcase your skills.</li>
            <li>Collaborate on open-source projects or contribute to community forums.</li>
            <li>Stay updated with the latest trends and best practices in frontend development.</li>
            <li>Consider specializing in areas like UI/UX design or frontend architecture.</li>
            <li>Network with other developers and attend conferences or workshops.</li>
            <li>Continuously improve your problem-solving and debugging skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a frontend developer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start by learning the basics of HTML, CSS, and JavaScript through tutorials and courses. Apply what you learn immediately by building simple web pages and applications.</li>
            <li><strong>Interactive Learning:</strong> Use online platforms like Codecademy, FreeCodeCamp, or Udemy to learn HTML, CSS, and JavaScript interactively. These platforms provide hands-on exercises and projects to reinforce your learning.</li>
            <li><strong>Master a Frontend Framework:</strong> Choose a popular frontend framework such as React.js. Follow tutorials and build projects to understand its core concepts, component-based architecture, and state management techniques.</li>
            <li><strong>State Management:</strong> Learn how to manage application state effectively using libraries like Redux or Context API. Practice integrating state management into your projects to handle complex data flows.</li>
            <li><strong>Responsive Design:</strong> Study responsive design principles and techniques. Practice creating layouts that adapt seamlessly across different screen sizes using media queries and flexible grids.</li>
            <li><strong>Build Projects:</strong> Develop a portfolio of projects that showcase your frontend development skills. Start with small projects and gradually increase complexity to demonstrate your ability to handle real-world scenarios.</li>
            <li><strong>Contribute to Open Source:</strong> Participate in open-source projects related to frontend development. This allows you to collaborate with experienced developers, gain practical experience, and build a professional network.</li>
            <li><strong>Stay Updated:</strong> Follow industry blogs, podcasts, and forums to stay informed about the latest trends, tools, and best practices in frontend development. Experiment with new technologies and incorporate them into your projects.</li>
            <li><strong>Specialize and Network:</strong> Consider specializing in areas like UI/UX design or frontend architecture based on your interests and career goals. Attend local meetups, workshops, or conferences to network with other developers and industry professionals.</li>
            <li><strong>Continuous Improvement:</strong> Embrace a growth mindset and continually challenge yourself to improve your problem-solving and debugging skills. Learn from your mistakes and seek feedback to refine your coding practices.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="https://www.codewars.com/dashboard" target="_blank" rel="noopener noreferrer">Codewars</a> - Improve your coding skills with challenges and kata.</li>
            <li><a href="http://udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - The Complete Web Development Bootcamp</a> - Comprehensive course covering web development fundamentals.</li>
            <li><a href="https://www.udemy.com/course/100-days-of-code/" target="_blank" rel="noopener noreferrer">Udemy - 100 Days of Code: The Complete Python Pro Bootcamp</a> - Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</li>
          </ul>
          
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books:
          </Typography>
          <ul>
            <li><strong>"Eloquent JavaScript" by Marijn Haverbeke</strong> - A great resource for mastering JavaScript concepts.</li>
            <li><strong>"React Design Patterns and Best Practices" by Michele Bertoli</strong> - Learn advanced React patterns and best practices.</li>
            <li><strong>"CSS Secrets: Better Solutions to Everyday Web Design Problems" by Lea Verou</strong> - Explore advanced CSS techniques and solutions.</li>
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

export default FrontendDeveloperPage;