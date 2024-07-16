// client/src/data-scientist/DataScientist.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import GetAppIcon from '@mui/icons-material/GetApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

/**
 * Data Scientist Page Component
 * 
 * This component renders information about data science,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and study resources. It also includes buttons 
 * for sharing and downloading content and a "Back to Top" button
 * for easy navigation.
 */
const DataScientistPage = () => {
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
            Data Scientist
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
            Data scientists analyze complex datasets to uncover insights and trends that help organizations make data-driven decisions. They use tools like Python, R, and machine learning algorithms to extract valuable information from data.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Data Scientist</li>
            <li>Machine Learning Engineer</li>
            <li>Data Analyst</li>
            <li>Business Intelligence Analyst</li>
            <li>Quantitative Analyst</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Performing exploratory data analysis (EDA) and data cleaning.</li>
            <li>Building predictive models using machine learning techniques.</li>
            <li>Interpreting and communicating results to stakeholders.</li>
            <li>Implementing data pipelines and integrating new data sources.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in Python or R programming languages.</li>
            <li>Experience with machine learning frameworks like TensorFlow or PyTorch.</li>
            <li>Statistical analysis and data visualization skills.</li>
            <li>Knowledge of databases and SQL for data manipulation.</li>
            <li>Ability to apply algorithms and statistical models to solve business problems.</li>
            <li>Strong problem-solving and analytical skills.</li>
            <li>Effective communication and storytelling with data.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Data science offers various career paths and opportunities for growth. Here are common stages in a data scientist's career progression:
          </Typography>
          <ul>
            <li><strong>Junior Data Scientist:</strong> Entry-level position focused on learning data analysis and basic machine learning techniques.</li>
            <li><strong>Data Analyst or Machine Learning Engineer:</strong> Analyzes data and builds models to solve specific business problems.</li>
            <li><strong>Senior Data Scientist:</strong> Leads data science projects, develops advanced algorithms, and provides strategic insights.</li>
            <li><strong>Data Science Manager or Director:</strong> Manages data science teams, oversees projects, and aligns data strategies with business goals.</li>
            <li><strong>Chief Data Scientist or Head of Data Science:</strong> Defines the data strategy, leads innovation, and drives data-driven decision-making at an organizational level.</li>
          </ul>
        </Box>
        
        <Box mt={4}>
        <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
          Salaries
        </Typography>
        <ul>
          <li><strong>Junior Data Scientist:</strong> $60,000 - $80,000 annually</li>
          <li><strong>Mid-Level Data Scientist:</strong> $80,000 - $100,000 annually</li>
          <li><strong>Senior Data Scientist:</strong> $100,000 - $130,000 annually</li>
          <li><strong>Lead Data Scientist or Data Science Manager:</strong> $130,000 - $160,000 annually</li>
          <li><strong>Chief Data Scientist or Director of Data Science:</strong> $160,000+ annually</li>
        </ul>
      </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Data science is in high demand due to the increasing volume and complexity of data generated by businesses. It offers opportunities to solve real-world problems, innovate with advanced technologies, and drive business growth through data-driven insights.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Data Scientist
          </Typography>
          <ul>
            <li>Master programming languages like Python and R.</li>
            <li>Gain proficiency in data manipulation and analysis using libraries like Pandas and NumPy.</li>
            <li>Learn machine learning algorithms and frameworks such as TensorFlow or PyTorch.</li>
            <li>Practice data visualization using tools like Matplotlib or Tableau.</li>
            <li>Build a portfolio of projects showcasing your data analysis and machine learning skills.</li>
            <li>Participate in online competitions (e.g., Kaggle) and contribute to open-source projects.</li>
            <li>Stay updated with the latest developments in data science and machine learning.</li>
            <li>Network with professionals in the field and attend conferences or workshops.</li>
            <li>Obtain relevant certifications or advanced degrees in data science or related fields.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Effective study strategies for becoming a data scientist include:
          </Typography>
          <ul>
            <li><strong>Hands-on Projects:</strong> Apply theoretical knowledge by working on real-world data science projects. Start with small datasets and gradually tackle more complex problems.</li>
            <li><strong>Continuous Learning:</strong> Stay updated with the latest advancements in data science through online courses, books, and research papers. Follow influential data scientists and industry leaders on social media for insights.</li>
            <li><strong>Problem-Solving Practice:</strong> Solve data-related problems on platforms like Kaggle to improve analytical skills. Participate in competitions to benchmark your skills and learn from others.</li>
            <li><strong>Networking:</strong> Connect with data scientists, join professional organizations, attend meetups, and participate in online communities to gain insights, mentorship, and career opportunities.</li>
            <li><strong>Certifications:</strong> Pursue certifications from recognized organizations (e.g., Coursera, edX, or industry-specific certifications) to validate your skills and enhance your credibility.</li>
            <li><strong>Collaborative Learning:</strong> Join study groups or online forums to discuss concepts, share resources, and collaborate on projects. Peer feedback and collaboration can deepen understanding and provide new perspectives.</li>
            <li><strong>Practical Application:</strong> Apply algorithms and statistical models to real-world datasets. Focus on understanding the business context, interpreting results, and communicating findings effectively.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">Kaggle</a> - Participate in data science competitions and access datasets for practice.</li>
            <li><a href="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - Python for Data Science and Machine Learning Bootcamp</a> - Learn Python for data analysis, machine learning, and data visualization.</li>
            <li><a href="https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - The Data Science Course: Complete Data Science Bootcamp 2024</a> - Complete Data Science Training: Math, Statistics, Python, Advanced Statistics in Python, Machine and Deep Learning.</li>
            <li><a href="https://www.coursera.org/specializations/jhu-data-science" target="_blank" rel="noopener noreferrer">Coursera - Data Science Specialization by Johns Hopkins University</a> - Comprehensive course covering data science fundamentals and tools.</li>
          </ul>

          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books:
          </Typography>
          <ul>
            <li><strong>"Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron</strong> - Practical guide to machine learning with Python.</li>
            <li><strong>"Data Science for Business" by Foster Provost and Tom Fawcett</strong> - Learn how to use data science for making strategic decisions in business.</li>
            <li><strong>"Python Data Science Handbook" by Jake VanderPlas</strong> - Comprehensive introduction to data science tools and techniques using Python.</li>
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

export default DataScientistPage;