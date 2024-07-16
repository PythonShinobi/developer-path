// client/src/ux-ui-designer/UXUIDesignerPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import GetAppIcon from '@mui/icons-material/GetApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 * UXUIDesignerPage Component
 * 
 * This component renders information about UX/UI design,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and resources. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const UXUIDesignerPage = () => {
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
    }
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
            UX/UI Designer
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
            UX/UI designers focus on the user experience and user interface aspects of digital products. They aim to create user-friendly, efficient, and visually appealing designs.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>UI Designer</li>
            <li>UX Designer</li>
            <li>Product Designer</li>
            <li>Interaction Designer</li>
            <li>Visual Designer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Conducting user research and evaluating user feedback.</li>
            <li>Creating user personas and user journeys.</li>
            <li>Developing wireframes, prototypes, and mockups.</li>
            <li>Designing user interfaces that are aesthetically pleasing and functional.</li>
            <li>Collaborating with developers and other stakeholders to implement design solutions.</li>
            <li>Testing designs and iterating based on user feedback.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in design tools like Sketch, Figma, Adobe XD, or InVision.</li>
            <li>Strong understanding of user-centered design principles.</li>
            <li>Ability to create wireframes, prototypes, and high-fidelity designs.</li>
            <li>Knowledge of HTML, CSS, and JavaScript is a plus.</li>
            <li>Good communication and collaboration skills.</li>
            <li>Attention to detail and a keen eye for aesthetics.</li>
            <li>Ability to handle multiple projects and meet deadlines.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            UX/UI design offers various opportunities for career growth. Here are common stages in a UX/UI designer's career progression:
          </Typography>
          <ul>
            <li><strong>Junior UX/UI Designer:</strong> Entry-level position focusing on learning and implementing design principles and tools.</li>
            <li><strong>Mid-Level UX/UI Designer:</strong> Takes on more complex projects, leads smaller teams, and mentors junior designers.</li>
            <li><strong>Senior UX/UI Designer:</strong> Leads major design projects, makes critical design decisions, and ensures high-quality design standards.</li>
            <li><strong>Lead UX/UI Designer:</strong> Guides the overall design strategy and vision, and manages design teams.</li>
            <li><strong>Design Manager or Director:</strong> Oversees multiple design projects, manages design teams, and contributes to organizational strategy.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
            <li><strong>Junior UX/UI Designer:</strong> $70K - $128K/yr</li>
            <li><strong>Mid-Level UX/UI Designer:</strong> $75K - $135K/yr</li>
            <li><strong>Senior UX/UI Designer:</strong> $82K - $148K/yr</li>
            <li><strong>Lead UX/UI Designer or UX/UI Architect:</strong> $91K - $166K/yr</li>
            <li><strong>UX/UI Manager or Director:</strong> $166K+/yr</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            UX/UI design is highly sought-after due to the increasing focus on user experience in digital products. Companies recognize that good design can significantly enhance user satisfaction and engagement, making UX/UI designers essential to product development.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a UX/UI Designer
          </Typography>
          <ul>
            <li>Learn the basics of design principles and user-centered design.</li>
            <li>Get proficient in design tools like Sketch, Figma, and Adobe XD.</li>
            <li>Create a portfolio of design projects to showcase your skills.</li>
            <li>Stay updated with the latest design trends and best practices.</li>
            <li>Network with other designers and join design communities.</li>
            <li>Consider taking courses or earning a degree in design-related fields.</li>
            <li>Gain experience through internships, freelancing, or volunteering on design projects.</li>
            <li>Continuously seek feedback and improve your design skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a UX/UI designer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start by learning the basics of UX/UI design through tutorials and courses. Apply what you learn by creating simple design projects.</li>
            <li><strong>Interactive Learning:</strong> Use online platforms like Codecademy, Udemy, or Coursera to learn UX/UI design interactively. These platforms provide hands-on exercises and projects to reinforce your learning.</li>
            <li><strong>Master Design Tools:</strong> Choose popular design tools like Sketch, Figma, or Adobe XD. Follow tutorials and build projects to understand their features and capabilities.</li>
            <li><strong>Build a Portfolio:</strong> Develop a portfolio of design projects that showcase your skills. Start with small projects and gradually increase complexity to demonstrate your ability to handle real-world scenarios.</li>
            <li><strong>Contribute to Open Source:</strong> Participate in open-source design projects. This allows you to collaborate with experienced designers, gain practical experience, and build a professional network.</li>
            <li><strong>Stay Updated:</strong> Follow industry blogs, podcasts, and forums to stay informed about the latest trends, tools, and best practices in UX/UI design. Experiment with new design techniques and frameworks to keep your skills up to date.</li>
            <li><strong>Join Designer Communities:</strong> Engage with online communities such as Dribbble, Behance, and LinkedIn. Seek help, share knowledge, and collaborate with other designers to enhance your learning experience.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="http://udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - The Complete Web Development Bootcamp</a> - Comprehensive course covering web development fundamentals.</li>
            <li><a href="https://www.udemy.com/course/100-days-of-code/" target="_blank" rel="noopener noreferrer">Udemy - 100 Days of Code: The Complete Python Pro Bootcamp for 2023</a> - A beginner-friendly Python course with a focus on building projects.</li>
            <li><a href="https://frontendmasters.com/courses/web-development-v2/" target="_blank" rel="noopener noreferrer">Frontend Masters - Complete Intro to Web Development, v2</a> - Beginner-friendly course covering HTML, CSS, JavaScript, and more.</li>
            <li><a href="https://www.udemy.com/course/modern-html-css-from-the-beginning/" target="_blank" rel="noopener noreferrer">Udemy - Modern HTML & CSS From The Beginning (Including Sass)</a> - A course for learning HTML and CSS from scratch.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books
          </Typography>
          <ul>
            <li><strong>"Don't Make Me Think" by Steve Krug:</strong> A practical guide to user experience and usability.</li>
            <li><strong>"The Design of Everyday Things" by Don Norman:</strong> Essential reading on design principles and human-centered design.</li>
            <li><strong>"Hooked: How to Build Habit-Forming Products" by Nir Eyal:</strong> Learn how to create products that engage users effectively.</li>
            <li><strong>"Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days" by Jake Knapp:</strong> A guide to the design sprint methodology used by Google Ventures.</li>
            <li><strong>"Lean UX" by Jeff Gothelf and Josh Seiden:</strong> Practical guide to integrating user experience design and Agile methodologies.</li>
            <li><strong>"100 Things Every Designer Needs to Know About People" by Susan Weinschenk:</strong> Insights into human behavior and how it applies to design.</li>
          </ul>
        </Box>

        {showBackToTop && (
          <Fab
            color="primary"
            size="small"
            onClick={handleScrollToTop}
            style={{ position: 'fixed', bottom: '16px', right: '16px', backgroundColor: '#007BFF', color: '#FFF' }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default UXUIDesignerPage;