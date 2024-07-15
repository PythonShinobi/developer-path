import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import GetAppIcon from '@mui/icons-material/GetApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

/**
 * CloudArchitectPage Component
 * 
 * This component renders information about cloud architecture,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and resources. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const CloudArchitectPage = () => {
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
            Cloud Architect
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
            Cloud architects design and manage cloud infrastructure and services, ensuring scalability, security, and efficiency.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Cloud Architect</li>
            <li>Cloud Solutions Architect</li>
            <li>Enterprise Cloud Architect</li>
            <li>Cloud Infrastructure Architect</li>
            <li>Senior Cloud Architect</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Designing and implementing cloud infrastructure solutions based on business requirements.</li>
            <li>Optimizing cloud services for performance, cost, and scalability.</li>
            <li>Ensuring cloud security and compliance with industry standards.</li>
            <li>Collaborating with stakeholders to define cloud strategies and architectures.</li>
            <li>Managing cloud migration projects and ensuring smooth transitions.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Expertise in cloud platforms like AWS, Azure, or Google Cloud.</li>
            <li>Knowledge of cloud architecture patterns, best practices, and design principles.</li>
            <li>Experience with infrastructure as code (IaC) tools like Terraform or CloudFormation.</li>
            <li>Understanding of networking, security, and compliance in cloud environments.</li>
            <li>Ability to architect and deploy highly available, scalable, and secure cloud solutions.</li>
            <li>Strong analytical and problem-solving skills.</li>
            <li>Effective communication and stakeholder management skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Cloud architecture offers various career paths from entry-level to senior roles, each focusing on designing and managing cloud solutions.
          </Typography>
          <ul>
            <li><strong>Cloud Engineer:</strong> Entry-level position focusing on implementing and managing cloud infrastructure.</li>
            <li><strong>Cloud Solutions Architect:</strong> Designs cloud solutions and oversees their implementation.</li>
            <li><strong>Senior Cloud Architect:</strong> Leads cloud architecture projects, defines strategies, and ensures alignment with business goals.</li>
            <li><strong>Chief Cloud Officer or Cloud Strategy Director:</strong> Defines the organization's cloud strategy and manages cloud initiatives.</li>
            <li><strong>Enterprise Cloud Architect:</strong> Architectures cloud solutions for large enterprises, focusing on scalability and security.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Cloud architects play a crucial role in modernizing IT infrastructures, enabling digital transformation, and leveraging cloud technologies for business growth.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Cloud Architect
          </Typography>
          <ul>
            <li>Gain foundational knowledge of cloud computing concepts and principles.</li>
            <li>Master one or more cloud platforms like AWS, Azure, or Google Cloud.</li>
            <li>Develop expertise in cloud architecture design and best practices.</li>
            <li>Learn infrastructure as code (IaC) tools for automating cloud deployments.</li>
            <li>Obtain certifications relevant to cloud architecture (e.g., AWS Certified Solutions Architect).</li>
            <li>Gain hands-on experience by working on cloud migration projects and designing scalable solutions.</li>
            <li>Stay updated with the latest trends and innovations in cloud computing.</li>
            <li>Network with other cloud professionals and participate in industry events.</li>
            <li>Continuously improve your skills in areas like security, compliance, and cost optimization.</li>
          </ul>
        </Box>

        {/* Study Methods and Strategies Section */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a cloud architect:
          </Typography>
          <ul>
            <li><strong>Cloud Certification Courses:</strong> Enroll in courses like AWS Certified Solutions Architect or Azure Architect Technologies to prepare for certification exams.</li>
            <li><strong>Hands-on Labs:</strong> Practice deploying cloud solutions and managing infrastructure using platforms like AWS or Azure.</li>
            <li><strong>Learn Infrastructure as Code:</strong> Use tools like Terraform or AWS CloudFormation to automate cloud deployments.</li>
            <li><strong>Case Studies and Whitepapers:</strong> Study real-world cloud architecture case studies and industry whitepapers to understand best practices.</li>
            <li><strong>Networking and Collaboration:</strong> Join cloud communities, attend meetups, and participate in forums to exchange knowledge and insights.</li>
            <li><strong>Mentorship:</strong> Seek guidance from experienced cloud architects or mentors to accelerate your learning and career growth.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="https://www.aws.training/" target="_blank" rel="noopener noreferrer">AWS Training and Certification</a> - Official training and certification resources for AWS.</li>
            <li><a href="https://azure.microsoft.com/en-us/training/" target="_blank" rel="noopener noreferrer">Microsoft Learn</a> - Microsoft's official learning platform for Azure.</li>
            <li><a href="https://cloud.google.com/training/" target="_blank" rel="noopener noreferrer">Google Cloud Training</a> - Training resources for Google Cloud Platform.</li>
          </ul>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books:
          </Typography>
          <ul>
            <li><strong>"Architecting the Cloud" by Michael J. Kavis:</strong> Guide to cloud architecture principles and best practices.</li>
            <li><strong>"Cloud Native Patterns" by John Gilbert:</strong> Learn patterns for building cloud-native applications.</li>
            <li><strong>"Cloud Security and Privacy" by Tim Mather:</strong> Understand security considerations in cloud environments.</li>
          </ul>
        </Box>
      </Container>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Fab
          color="primary"
          aria-label="scroll back to top"
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
          onClick={handleScrollToTop}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}

      <Footer />
    </div>
  );
};

export default CloudArchitectPage;
