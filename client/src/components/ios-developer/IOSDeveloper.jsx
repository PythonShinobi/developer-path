// client/src/components/ios-developer/IOSDeveloperPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Menu, MenuItem, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Reddit, X, Facebook, Pinterest, LinkedIn } from '@mui/icons-material';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 * IOSDeveloperPage Component
 * 
 * This component renders information about iOS development,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and resources. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const IOSDeveloperPage = () => {
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
            iOS Developer
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
              <MenuItem onClick={() => shareContent('facebook')}><Facebook/></MenuItem>
              <MenuItem onClick={() => shareContent('reddit')}><Reddit/></MenuItem>
              <MenuItem onClick={() => shareContent('pinterest')}><Pinterest/></MenuItem>
              <MenuItem onClick={() => shareContent('linkedin')}><LinkedIn/></MenuItem>                        
            </Menu>   
          </Box>
          <Typography variant="body1" paragraph>
            iOS developers create applications for Apple's iOS devices, including iPhones and iPads. They use programming languages like Swift and Objective-C and work with the iOS SDK and Xcode to build, test, and deploy applications.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>iOS Developer</li>
            <li>Mobile Developer</li>
            <li>App Developer</li>
            <li>Software Engineer</li>
            <li>Lead Mobile Developer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Designing and building applications for iOS devices.</li>
            <li>Ensuring the performance, quality, and responsiveness of applications.</li>
            <li>Collaborating with cross-functional teams to define, design, and ship new features.</li>
            <li>Identifying and correcting bottlenecks and fixing bugs.</li>
            <li>Maintaining code quality, organization, and automatization.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in Swift and Objective-C programming languages.</li>
            <li>Experience with iOS frameworks such as Core Data, Core Animation, etc.</li>
            <li>Understanding of Apple's design principles and interface guidelines.</li>
            <li>Knowledge of low-level C-based libraries is preferred.</li>
            <li>Familiarity with RESTful APIs to connect iOS applications to back-end services.</li>
            <li>Knowledge of UI/UX standards.</li>
            <li>Understanding of code versioning tools such as Git.</li>
            <li>Experience with performance and memory tuning with tools such as Instruments.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            iOS development offers various career advancement opportunities. Common stages in an iOS developer's career progression include:
          </Typography>
          <ul>
            <li><strong>Junior iOS Developer:</strong> Entry-level position focusing on learning and implementing iOS development practices and tools.</li>
            <li><strong>Mid-Level iOS Developer:</strong> Takes on more complex projects, leads small teams, and mentors junior developers.</li>
            <li><strong>Senior iOS Developer:</strong> Leads iOS projects, makes architectural decisions, and ensures high-quality standards.</li>
            <li><strong>Lead iOS Developer:</strong> Responsible for the overall technical direction and strategy for iOS projects.</li>
            <li><strong>Mobile Development Manager or Director:</strong> Manages mobile development teams, oversees multiple projects, and contributes to organizational strategy.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
              <li><strong>Junior iOS Developer:</strong> $79K - $95K/yr</li>
              <li><strong>Mid-Level iOS Developer:</strong> $95K - $114K/yr</li>
              <li><strong>Senior iOS Developer:</strong> $114K - $123K/yr</li>
              <li><strong>Lead iOS Developer:</strong> $123K - $124K/yr</li>
              <li><strong>Mobile Development Manager or Director:</strong> $124K+/yr</li>
          </ul>

          <Typography variant="body2" color="textSecondary" style={{ marginTop: 20, marginBottom: 20 }}>
            Salary ranges sourced from Coursera&nbsp;
            <a href="https://www.coursera.org/articles/ios-developer-salary">iOS developer salaries</a>
          </Typography>
        </Box>     

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            iOS development is highly sought-after due to the popularity of Apple devices and the demand for high-quality mobile applications. As iOS devices dominate the mobile market, businesses need skilled developers to create innovative and user-friendly apps that enhance the user experience and drive engagement.
          </Typography>
        </Box>
          
        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become an iOS Developer
          </Typography>
          <ul>
            <li>Learn the fundamentals of programming in Swift, Apple's preferred language for iOS development.</li>
            <li>Familiarize yourself with Xcode, the official integrated development environment (IDE) for iOS apps.</li>
            <li>Understand iOS frameworks and APIs, such as UIKit, SwiftUI, and Core Data.</li>
            <li>Learn to work with Apple’s Human Interface Guidelines to design intuitive and user-friendly interfaces.</li>
            <li>Develop a strong understanding of object-oriented programming (OOP) and design patterns.</li>
            <li>Build and test apps using Apple's development tools and simulators.</li>
            <li>Publish your apps on the App Store and manage their lifecycle through updates and user feedback.</li>
            <li>Keep up-to-date with new iOS releases and features to ensure your skills remain relevant.</li>
            <li>Contribute to open-source projects or build your own portfolio to showcase your skills.</li>
            <li>Network with other iOS developers and participate in iOS developer communities.</li>
          </ul>
        </Box>
          
        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become an iOS developer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start by learning Swift through online courses and tutorials. Build simple projects to apply what you learn and gain practical experience.</li>
            <li><strong>Interactive Learning:</strong> Use platforms like Udemy, Codecademy, or Ray Wenderlich to learn iOS development. These platforms offer interactive courses and projects.</li>
            <li><strong>Master iOS Frameworks:</strong> Focus on key iOS frameworks such as UIKit and SwiftUI. Follow tutorials and build projects to understand their functionalities and applications.</li>
            <li><strong>Design Guidelines:</strong> Study Apple’s Human Interface Guidelines to learn how to design intuitive and visually appealing apps.</li>
            <li><strong>Build a Portfolio:</strong> Create a portfolio of iOS apps showcasing your skills. Include a variety of projects to demonstrate your ability to handle different aspects of app development.</li>
            <li><strong>Contribute to Open Source:</strong> Get involved in open-source iOS projects to gain experience and collaborate with other developers.</li>
            <li><strong>Stay Updated:</strong> Follow iOS development blogs, forums, and news to stay informed about the latest updates and best practices.</li>
            <li><strong>Join Developer Communities:</strong> Engage with iOS developer communities on platforms like Stack Overflow, GitHub, and Reddit to seek help, share knowledge, and network.</li>
          </ul>
        </Box>
          
        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="https://www.udemy.com/course/ios-13-app-development-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - iOS & Swift - The Complete iOS App Development Bootcamp</a> - Comprehensive course covering iOS app development with Swift.</li>
            <li><a href="https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift" target="_blank" rel="noopener noreferrer">Udemy - SwiftUI + SwiftData Masterclass - iOS App Development Swift</a> - Learn the basics of Swift.</li>
            <li><a href="https://www.raywenderlich.com/ios" target="_blank" rel="noopener noreferrer">Ray Wenderlich - iOS Tutorials</a> - High-quality tutorials and articles for iOS development.</li>
          </ul>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books:
          </Typography>
          <ul>
            <li><strong>"Swift Programming: The Big Nerd Ranch Guide" by Matthew Mathias and John Gallagher:</strong> A comprehensive guide to Swift programming.</li>
            <li><strong>"iOS Programming: The Big Nerd Ranch Guide" by Christian Keur and Aaron Hillegass:</strong> A practical guide to iOS development.</li>            
            <li><strong>"Pro iOS Table Views and Collection Views" by Tim Duckett:</strong> Advanced techniques for building user interfaces in iOS apps.</li>            
          </ul>
        </Box>

        {showBackToTop && (
          <Box position="fixed" bottom={16} right={16}>
            <Fab
              color="primary"
              aria-label="Back to Top"
              onClick={handleScrollToTop}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default IOSDeveloperPage;