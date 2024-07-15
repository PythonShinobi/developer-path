// client/src/cyber-security-specialist/CyberSecuritySpecialistPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import GetAppIcon from '@mui/icons-material/GetApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

/**
 * CyberSecuritySpecialistPage Component
 * 
 * This component renders information about Cyber Security Specialist,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and resources. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const CyberSecuritySpecialistPage = () => {
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
            Cyber Security Specialist
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
            Cyber Security Specialists are experts responsible for protecting computer systems, networks, and data from cyber threats and attacks.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Cyber Security Analyst</li>
            <li>Information Security Specialist</li>
            <li>Security Consultant</li>
            <li>Penetration Tester (Ethical Hacker)</li>
            <li>Incident Responder</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Monitoring computer networks for security issues.</li>
            <li>Conducting security assessments through vulnerability testing and risk analysis.</li>
            <li>Installing and configuring security software and tools.</li>
            <li>Implementing security measures to protect systems and data.</li>
            <li>Responding to incidents and providing incident analysis and resolution.</li>
            <li>Developing and implementing security policies and procedures.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in network and system security.</li>
            <li>Knowledge of cybersecurity frameworks and best practices.</li>
            <li>Experience with intrusion detection systems and firewalls.</li>
            <li>Understanding of cryptography and secure communication protocols.</li>
            <li>Ability to perform penetration testing and vulnerability assessments.</li>
            <li>Analytical thinking and problem-solving skills.</li>
            <li>Strong attention to detail and ability to handle confidential information.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Cyber Security offers various opportunities for career growth. Here are common stages in a Cyber Security Specialist's career progression:
          </Typography>
          <ul>
            <li><strong>Junior Cyber Security Analyst:</strong> Entry-level position focusing on learning and implementing security measures.</li>
            <li><strong>Mid-Level Cyber Security Specialist:</strong> Takes on more complex projects, conducts risk assessments, and leads security initiatives.</li>
            <li><strong>Senior Cyber Security Consultant:</strong> Provides strategic guidance, manages security projects, and leads teams.</li>
            <li><strong>Chief Information Security Officer (CISO):</strong> Oversees organization-wide security strategies, policies, and compliance.</li>
            <li><strong>Security Architect:</strong> Designs and builds secure IT systems and networks.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            With the rise in cyber threats and data breaches, organizations prioritize cybersecurity to protect their digital assets and maintain trust with customers. Cyber Security Specialists play a crucial role in safeguarding sensitive information and ensuring business continuity.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Cyber Security Specialist
          </Typography>
          <ul>            
            <li>Obtain industry certifications such as CompTIA Security+, CISSP, or CEH.</li>
            <li>Develop hands-on experience through internships, CTF (Capture The Flag) competitions, or cybersecurity projects.</li>
            <li>Stay updated with the latest cybersecurity threats, technologies, and defense strategies.</li>
            <li>Join cybersecurity communities, attend conferences, and participate in continuous learning.</li>
            <li>Build a strong network and seek mentorship from experienced professionals in the field.</li>
            <li>Gain practical skills in areas such as network security, cryptography, and incident response.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a Cyber Security Specialist:
          </Typography>
          <ul>
            <li><strong>Hands-on Learning:</strong> Practice cybersecurity skills through labs, simulations, and real-world scenarios.</li>
            <li><strong>Certification Preparation:</strong> Study for industry certifications like CISSP, CompTIA Security+, or CEH. Utilize study guides, practice exams, and online courses.</li>
            <li><strong>Networking and Collaboration:</strong> Engage with cybersecurity communities, forums, and professional organizations. Share knowledge, learn from others, and build connections in the industry.</li>
            <li><strong>Continuous Learning:</strong> Stay informed about emerging threats, technologies, and best practices through blogs, podcasts, and cybersecurity news sources.</li>
            <li><strong>Practical Projects:</strong> Develop practical skills by working on cybersecurity projects, participating in CTF competitions, and contributing to open-source security tools.</li>
            <li><strong>Mentorship:</strong> Seek mentorship from experienced cybersecurity professionals. Learn from their insights, guidance, and career advice.</li>
            <li><strong>Educational Resources:</strong> Utilize online platforms, courses, and tutorials to expand your knowledge of cybersecurity concepts, tools, and techniques.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="https://github.com/ossu/computer-science" target="_blank" rel="noopener noreferrer">Path to a free self-taught education in Computer Science! </a></li>
            <li><a href="https://www.cybrary.it/" target="_blank" rel="noopener noreferrer">Cybrary - Free Cyber Security Training</a> - Online platform offering free cybersecurity courses and resources.</li>                        
            <li><a href="https://www.sans.org/" target="_blank" rel="noopener noreferrer">SANS Institute - Cyber Security Training</a> - Provider of cybersecurity training and certifications.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books
          </Typography>
          <ul>
            <li><strong>"The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win" by Gene Kim, Kevin Behr, and George Spafford:</strong> Provides insights into cybersecurity within the context of IT operations.</li>
            <li><strong>"Hacking: The Art of Exploitation" by Jon Erickson:</strong> Explores the fundamentals of hacking and security vulnerabilities.</li>
            <li><strong>"Network Security Essentials: Applications and Standards" by William Stallings:</strong> Comprehensive guide to network security technologies and protocols.</li>
            <li><strong>"Cybersecurity for Beginners" by Raef Meeuwisse:</strong> Introduction to cybersecurity concepts and best practices for beginners.</li>
            <li><strong>"The Web Application Hacker's Handbook: Finding and Exploiting Security Flaws" by Dafydd Stuttard and Marcus Pinto:</strong> Focuses on web application security testing and vulnerabilities.</li>
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

export default CyberSecuritySpecialistPage;