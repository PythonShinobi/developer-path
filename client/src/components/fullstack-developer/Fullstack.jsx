// client/src/fullstack-developer/Fullstack.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import GetAppIcon from '@mui/icons-material/GetApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 * FullstackDeveloperPage Component
 * 
 * This component renders information about fullstack development,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and resources. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const FullstackDeveloperPage = () => {
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
            Fullstack Developer
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
            Fullstack developers are versatile professionals capable of working on both the frontend and backend aspects of web applications. They use a range of technologies to build comprehensive, end-to-end solutions.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Fullstack Developer</li>
            <li>Software Engineer</li>
            <li>Web Developer (Fullstack)</li>
            <li>Application Developer</li>
            <li>Fullstack Engineer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Designing and developing frontend interfaces using HTML, CSS, and JavaScript frameworks like React.</li>
            <li>Implementing backend logic using server-side languages such as Node.js, Python, or Ruby.</li>
            <li>Integrating databases using SQL or NoSQL technologies.</li>
            <li>Ensuring application performance and scalability.</li>
            <li>Collaborating with designers, product managers, and other developers.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in frontend technologies like HTML, CSS, JavaScript, and React.</li>
            <li>Experience with backend technologies such as Node.js, Express, Django, or Ruby on Rails.</li>
            <li>Understanding of database management with SQL or NoSQL databases.</li>
            <li>Knowledge of RESTful API design and implementation.</li>
            <li>Familiarity with version control systems (e.g., Git).</li>
            <li>Ability to write clean, maintainable code and follow coding standards.</li>
            <li>Problem-solving skills and attention to detail.</li>
            <li>Good communication and collaboration skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Fullstack development offers numerous opportunities for career advancement. Here are common stages in a fullstack developer's career progression:
          </Typography>
          <ul>
            <li><strong>Junior Fullstack Developer:</strong> Entry-level position focusing on learning and implementing both frontend and backend technologies.</li>
            <li><strong>Mid-Level Fullstack Developer:</strong> Takes on more complex projects, leads smaller teams, and mentors junior developers.</li>
            <li><strong>Senior Fullstack Developer:</strong> Leads fullstack projects, makes architectural decisions, and ensures high-quality code standards.</li>
            <li><strong>Technical Lead or Fullstack Architect:</strong> Responsible for technical strategy, guiding teams, and implementing best practices across projects.</li>
            <li><strong>Development Manager or Director:</strong> Manages development teams, oversees multiple projects, and contributes to organizational strategy.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
            <li><strong>Junior Fullstack Developer:</strong> $60,000 - $80,000 annually</li>
            <li><strong>Mid-Level Fullstack Developer:</strong> $80,000 - $100,000 annually</li>
            <li><strong>Senior Fullstack Developer:</strong> $100,000 - $130,000 annually</li>
            <li><strong>Technical Lead or Fullstack Architect:</strong> $130,000 - $160,000 annually</li>
            <li><strong>Fullstack Manager or Director:</strong> $160,000+ annually</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Fullstack development is highly sought-after due to the demand for professionals who can handle both frontend and backend tasks. This versatility makes fullstack developers valuable assets in any tech team, providing opportunities for career growth and diverse projects.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Fullstack Developer
          </Typography>
          <ul>
            <li>Learn the fundamentals of HTML, CSS, and JavaScript.</li>
            <li>Master a frontend framework such as React, Vue.js, or Angular.</li>
            <li>Learn a backend language like Node.js, Python, Ruby, or PHP.</li>
            <li>Understand database management with SQL or NoSQL databases.</li>
            <li>Build fullstack projects to showcase your skills.</li>
            <li>Collaborate on open-source projects or contribute to community forums.</li>
            <li>Stay updated with the latest trends and best practices in fullstack development.</li>
            <li>Consider specializing in areas like DevOps or cloud computing.</li>
            <li>Network with other developers and attend conferences or workshops.</li>
            <li>Continuously improve your problem-solving and debugging skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a fullstack developer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start by learning the basics of HTML, CSS, JavaScript, and a backend language through tutorials and courses. Apply what you learn by building simple web applications.</li>
            <li><strong>Interactive Learning:</strong> Use online platforms like Codecademy, FreeCodeCamp, or Udemy to learn both frontend and backend technologies interactively. These platforms provide hands-on exercises and projects to reinforce your learning.</li>
            <li><strong>Master a Frontend Framework:</strong> Choose a popular frontend framework such as React.js. Follow tutorials and build projects to understand its core concepts, component-based architecture, and state management techniques.</li>
            <li><strong>Learn Backend Development:</strong> Choose a backend language and framework, such as Node.js with Express. Follow tutorials and build projects to understand server-side development, API creation, and database integration.</li>
            <li><strong>Database Management:</strong> Study relational and non-relational databases. Practice designing and interacting with databases using SQL and NoSQL technologies.</li>
            <li><strong>Build Fullstack Projects:</strong> Develop a portfolio of fullstack projects that showcase your skills. Start with small projects and gradually increase complexity to demonstrate your ability to handle real-world scenarios.</li>
            <li><strong>Contribute to Open Source:</strong> Participate in open-source projects related to fullstack development. This allows you to collaborate with experienced developers, gain practical experience, and build a professional network.</li>
            <li><strong>Stay Updated:</strong> Follow industry blogs, podcasts, and forums to stay informed about the latest trends, tools, and best practices in fullstack development. Experiment with new technologies and frameworks to keep your skills up to date.</li>
            <li><strong>Join Developer Communities:</strong> Engage with online communities such as Stack Overflow, GitHub, and Reddit. Seek help, share knowledge, and collaborate with other developers to enhance your learning experience.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="http://udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - The Complete Web Development Bootcamp</a> - Comprehensive course covering web development fundamentals.</li>
            <li><a href="https://www.udemy.com/course/100-days-of-code/" target="_blank" rel="noopener noreferrer">Udemy - 100 Days of Code: The Complete Python Pro Bootcamp</a> - Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</li>
            <li><a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - Node.js, Express, MongoDB & More: The Complete Bootcamp</a> - Dive into MongoDB and NoSQL database management.</li>
          </ul>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books:
          </Typography>
          <ul>
            <li><strong>"Node.js Design Patterns" by Mario Casciaro:</strong> Explore advanced design patterns for Node.js applications.</li>
            <li><strong>"MongoDB: The Definitive Guide" by Kristina Chodorow:</strong> Comprehensive guide to MongoDB database management.</li>
            <li><strong>"Clean Code: A Handbook of Agile Software Craftsmanship" by Robert C. Martin:</strong> Learn best practices for writing clean and maintainable code.</li>
            <li><strong>"Eloquent JavaScript" by Marijn Haverbeke</strong> - A great resource for mastering JavaScript concepts.</li>
            <li><strong>"React Design Patterns and Best Practices" by Michele Bertoli</strong> - Learn advanced React patterns and best practices.</li>
            <li><strong>"CSS Secrets: Better Solutions to Everyday Web Design Problems" by Lea Verou</strong> - Explore advanced CSS techniques and solutions.</li>
          </ul>
        </Box>
      </Container>
      {showBackToTop && (
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
          onClick={handleScrollToTop}
          style={{ position: 'fixed', bottom: '16px', right: '16px' }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
      <Footer />
    </div>
  );
};

export default FullstackDeveloperPage;
