// client/src/machine-learning/MachineLearning.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import GetAppIcon from '@mui/icons-material/GetApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 * MachineLearningPage Component
 * 
 * This component renders information about machine learning,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and resources. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const MachineLearningPage = () => {
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
            Machine Learning
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
            Machine learning involves developing algorithms that enable computers to learn from and make decisions or predictions based on data. It has applications in various fields like finance, healthcare, and more.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Machine Learning Engineer</li>
            <li>Data Scientist</li>
            <li>AI Researcher</li>
            <li>Machine Learning Researcher</li>
            <li>Algorithm Developer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Developing machine learning models and algorithms.</li>
            <li>Collecting, cleaning, and preprocessing data for analysis.</li>
            <li>Evaluating and deploying models into production.</li>
            <li>Collaborating with data engineers and software developers.</li>
            <li>Staying updated with advancements in machine learning.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Strong programming skills in languages like Python, R, or Java.</li>
            <li>Knowledge of machine learning libraries/frameworks like TensorFlow, PyTorch, or scikit-learn.</li>
            <li>Understanding of statistical analysis and experimental design.</li>
            <li>Experience with data visualization tools like Matplotlib or Tableau.</li>
            <li>Ability to work with big data technologies like Hadoop or Spark.</li>
            <li>Problem-solving and analytical thinking.</li>
            <li>Good communication and teamwork.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Machine learning offers diverse career paths with opportunities for growth and specialization. Here are common stages in a machine learning career:
          </Typography>
          <ul>
            <li><strong>Junior Machine Learning Engineer:</strong> Entry-level position focusing on learning and implementing machine learning algorithms.</li>
            <li><strong>Machine Learning Scientist:</strong> Conducts research and develops new algorithms for specific applications.</li>
            <li><strong>Senior Machine Learning Engineer:</strong> Leads machine learning projects, designs complex systems, and mentors junior team members.</li>
            <li><strong>AI Architect:</strong> Designs AI solutions and oversees their implementation across projects.</li>
            <li><strong>Chief Data Scientist:</strong> Leads data science teams, defines strategies, and drives innovation in data-driven decision making.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
            <li><strong>Junior Machine Learning Specialist:</strong> $103K - $187K/yr</li>
            <li><strong>Mid-Level Machine Learning Specialist:</strong> $126K - $217K/yr</li>
            <li><strong>Senior Machine Learning Specialist:</strong> $143K - $247K/yr</li>
            <li><strong>Lead Machine Learning Specialist or Machine Learning Architect:</strong> $156K - $270K/yr</li>
            <li><strong>Chief Machine Learning Specialist or Director of Machine Learning:</strong> $270K+/yr</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Machine learning is in high demand due to its ability to derive insights and predictions from data, enabling businesses to make data-driven decisions and automate processes. Professionals in this field are integral to innovation in AI and data science.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Machine Learning Engineer
          </Typography>
          <ul>
            <li>Learn programming languages like Python and R.</li>
            <li>Understand linear algebra, calculus, and statistics.</li>
            <li>Master machine learning libraries/frameworks like TensorFlow or PyTorch.</li>
            <li>Study data preprocessing, feature engineering, and model evaluation techniques.</li>
            <li>Build projects and participate in Kaggle competitions to apply your skills.</li>
            <li>Contribute to open-source machine learning projects.</li>
            <li>Stay updated with research papers, blogs, and conferences in AI and machine learning.</li>
            <li>Network with professionals in the field and join relevant communities.</li>
            <li>Obtain certifications or pursue advanced degrees in machine learning or AI.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a machine learning engineer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start with basic machine learning algorithms and datasets. Implement models from scratch to understand their inner workings.</li>
            <li><strong>Online Courses and Tutorials:</strong> Enroll in platforms like Coursera, edX, or Udacity for structured learning paths. Courses by Andrew Ng and others provide comprehensive knowledge.</li>
            <li><strong>Read Research Papers:</strong> Stay updated with the latest advancements in machine learning by reading research papers on arXiv, Google Scholar, or conferences like NeurIPS and ICML.</li>
            <li><strong>Projects and Competitions:</strong> Build a portfolio of projects showcasing different aspects of machine learning. Participate in Kaggle competitions to apply your skills in real-world scenarios.</li>
            <li><strong>Collaborate and Discuss:</strong> Join online forums like Reddit's r/MachineLearning or Stack Overflow to ask questions, share knowledge, and learn from others in the community.</li>
            <li><strong>Advanced Topics:</strong> Dive deeper into specialized areas like computer vision, natural language processing, or reinforcement learning based on your interests and career goals.</li>
            <li><strong>Continuous Learning:</strong> Machine learning is a rapidly evolving field. Stay curious, explore new techniques, and experiment with different datasets and models to enhance your expertise.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="https://www.udemy.com/course/machinelearning/" target="_blank" rel="noopener noreferrer">Udemy - Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]</a></li>
            <li><a href="https://www.udemy.com/course/tensorflow-developer-certificate-machine-learning-zero-to-mastery/" target="_blank" rel="noopener noreferrer">Udemy - TensorFlow for Deep Learning Bootcamp</a></li>
            <li><a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">Kaggle</a> - Platform for machine learning competitions and datasets to practice your skills.</li>
            <li><a href="https://machinelearningmastery.com/" target="_blank" rel="noopener noreferrer">Machine Learning Mastery</a> - Blog with tutorials, guides, and resources for mastering machine learning.</li>
            <li><a href="https://www.udemy.com/course/100-days-of-code/" target="_blank" rel="noopener noreferrer">Udemy - 100 Days of Code: The Complete Python Pro Bootcamp</a></li>
          </ul>

          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books
          </Typography>
          <ul>
            <li><strong>"Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron:</strong> A practical guide to machine learning with examples in Python.</li>
            <li><strong>"Pattern Recognition and Machine Learning" by Christopher M. Bishop:</strong> Covers the fundamental concepts and algorithms in machine learning.</li>
            <li><strong>"Deep Learning" by Ian Goodfellow, Yoshua Bengio, and Aaron Courville:</strong> A comprehensive introduction to deep learning techniques.</li>
            <li><strong>"Machine Learning Yearning" by Andrew Ng:</strong> Practical insights and guidelines for building machine learning systems.</li>
            <li><strong>"Python Machine Learning" by Sebastian Raschka and Vahid Mirjalili:</strong> Offers a comprehensive introduction to machine learning using Python.</li>
          </ul>
        </Box>

        {showBackToTop && (
          <Fab color="primary" aria-label="scroll back to top" onClick={handleScrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default MachineLearningPage;
