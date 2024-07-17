import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Menu, MenuItem, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 * CppDeveloperPage Component
 * 
 * This component renders information about C/C++ development,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and resources. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const CppDeveloperPage = () => {
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
            C/C++ Developer
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
            C/C++ developers are skilled programmers who specialize in system-level programming, embedded systems, and high-performance applications using the C and C++ programming languages.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>C/C++ Developer</li>
            <li>System Programmer</li>
            <li>Embedded Systems Developer</li>
            <li>Game Developer (C++ focus)</li>
            <li>Backend Developer (C++ focus)</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Designing and developing system-level software applications, operating systems components, and drivers using C/C++.</li>
            <li>Optimizing code and algorithms for performance and efficiency.</li>
            <li>Implementing complex data structures and algorithms.</li>
            <li>Participating in all phases of the software development lifecycle, from requirements gathering to deployment and maintenance.</li>
            <li>Collaborating with cross-functional teams to define, design, and ship new features.</li>
            <li>Debugging and troubleshooting issues in production environments.</li>
            <li>Ensuring software quality by writing unit tests and conducting code reviews.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in C and C++ programming languages.</li>
            <li>Knowledge of low-level hardware interactions and system-level programming concepts.</li>
            <li>Experience with embedded systems development and real-time operating systems.</li>
            <li>Understanding of memory management, pointers, and multi-threading in C/C++.</li>
            <li>Familiarity with version control systems like Git.</li>
            <li>Strong problem-solving and analytical skills.</li>
            <li>Ability to work independently and in a team environment.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            C/C++ development offers various opportunities for career advancement. Here are common stages in a C/C++ developer's career progression:
          </Typography>
          <ul>
            <li><strong>Junior C/C++ Developer:</strong> Entry-level position focusing on learning and implementing C/C++ programming.</li>
            <li><strong>Mid-Level C/C++ Developer:</strong> Takes on more complex projects, gains expertise in specific domains (e.g., embedded systems, game development).</li>
            <li><strong>Senior C/C++ Developer:</strong> Leads development projects, makes architectural decisions, and mentors junior developers.</li>
            <li><strong>Technical Lead or C/C++ Architect:</strong> Responsible for technical strategy, guiding teams, and implementing best practices across projects.</li>
            <li><strong>Development Manager or Director:</strong> Manages development teams, oversees multiple projects, and contributes to organizational strategy.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
            <li><strong>Junior C/C++ Developer:</strong> $76K - $141K/yr</li>
            <li><strong>Mid-Level C/C++ Developer:</strong> $92K - $171K/yr</li>
            <li><strong>Senior C/C++ Developer:</strong> $109K - $202K/yr</li>
            <li><strong>Technical Lead or C/C++ Architect:</strong> $118K - $219K/yr</li>
            <li><strong>C/C++ Manager or Director:</strong> $219K+/yr</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            C/C++ development is highly valued for its efficiency, speed, and direct hardware interaction capabilities. It is widely used in system programming, embedded systems, game development, and performance-critical applications.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a C/C++ Developer
          </Typography>
          <ul>
            <li>Master the fundamentals of C and C++ programming languages.</li>
            <li>Understand memory management, pointers, and low-level system interactions.</li>
            <li>Practice coding exercises to strengthen problem-solving skills.</li>
            <li>Build projects that demonstrate your understanding of system-level programming, algorithms, and data structures.</li>
            <li>Explore specific domains like embedded systems, game development, or high-performance computing based on your interests.</li>
            <li>Contribute to open-source projects or collaborate with other developers to gain practical experience.</li>
            <li>Stay updated with the latest trends and advancements in C/C++ development through books, courses, and community forums.</li>
            <li>Attend workshops, conferences, and meetups to network with professionals in the field.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <Typography variant="body1" paragraph>
            Here are some recommended study resources to help you become a C/C++ developer:
          </Typography>
          <ul>
            <li><a href="https://www.udemy.com/course/free-learn-c-tutorial-beginners/" target="_blank" rel="noopener noreferrer">Udemy - C++ Programming For Beginners - Master the C++ Language</a> - Learn C++ programming from scratch with practical examples and exercises.</li>
            <li><a href="https://www.udemy.com/course/beginning-c-plus-plus-programming/" target="_blank" rel="noopener noreferrer">Udemy - Beginning C++ Programming - From Beginner to Beyond</a> - Comprehensive course covering C++ fundamentals and advanced topics.</li>
            <li><a href="https://www.geeksforgeeks.org/c-language-set-1-introduction/" target="_blank" rel="noopener noreferrer">GeeksforGeeks - C Programming Language</a> - Tutorials, practice problems, and articles on C programming.</li>
            <li><a href="https://www.learncpp.com/" target="_blank" rel="noopener noreferrer">LearnCpp.com</a> - Free tutorials and resources for learning C++ programming.</li>            
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books
          </Typography>
          <ul>
            <li><strong>The C Programming Language</strong> by Brian W. Kernighan and Dennis M. Ritchie</li>
            <li><strong>C++ Primer</strong> by Stanley B. Lippman, Josée Lajoie, and Barbara E. Moo</li>
            <li><strong>Effective Modern C++</strong> by Scott Meyers</li>
            <li><strong>Programming: Principles and Practice Using C++</strong> by Bjarne Stroustrup</li>
            <li><strong>C++ Concurrency in Action</strong> by Anthony Williams</li>
            <li><strong>Accelerated C++: Practical Programming by Example</strong> by Andrew Koenig and Barbara E. Moo</li>
          </ul>
        </Box>

        {/* Back to Top Button */}
        {showBackToTop && (
          <Fab
            color="primary"
            size="medium"
            aria-label="scroll back to top"
            style={{ position: 'fixed', bottom: '20px', right: '20px' }}
            onClick={handleScrollToTop}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default CppDeveloperPage;