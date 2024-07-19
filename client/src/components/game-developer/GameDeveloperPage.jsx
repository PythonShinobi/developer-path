// client/src/game-developer/GameDeveloperPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Menu, MenuItem, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Reddit, X, Facebook, Pinterest, LinkedIn } from '@mui/icons-material';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 * GameDeveloperPage Component
 * 
 * This component renders information about game development,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and resources. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const GameDeveloperPage = () => {
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
            Game Developer
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
              <MenuItem onClick={() => shareContent('facebook')}><Facebook /></MenuItem>
              <MenuItem onClick={() => shareContent('reddit')}><Reddit /></MenuItem>
              <MenuItem onClick={() => shareContent('pinterest')}><Pinterest /></MenuItem>
              <MenuItem onClick={() => shareContent('linkedin')}><LinkedIn /></MenuItem>
            </Menu>
          </Box>
          <Typography variant="body1" paragraph>
            Game developers create and design video games across various platforms. They work on game mechanics, graphics, and user experience to create engaging and entertaining games.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Game Developer</li>
            <li>Gameplay Programmer</li>
            <li>Game Designer</li>
            <li>Software Engineer (Games)</li>
            <li>Game Programmer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Designing and implementing game mechanics and systems.</li>
            <li>Creating and optimizing game graphics and assets.</li>
            <li>Developing and integrating game features and content.</li>
            <li>Testing and debugging game code to ensure smooth gameplay.</li>
            <li>Collaborating with designers, artists, and other developers.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in programming languages such as C++, C#, or Python.</li>
            <li>Experience with game development engines like Unity or Unreal Engine.</li>
            <li>Understanding of game physics, mathematics, and algorithms.</li>
            <li>Knowledge of graphics programming and 3D modeling.</li>
            <li>Ability to work with version control systems (e.g., Git).</li>
            <li>Strong problem-solving skills and creativity.</li>
            <li>Good communication and teamwork abilities.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            A career in game development can lead to various roles and responsibilities. Here's a typical career progression:
          </Typography>
          <ul>
            <li><strong>Junior Game Developer:</strong> Entry-level position focusing on learning and contributing to game development projects.</li>
            <li><strong>Mid-Level Game Developer:</strong> Takes on more complex tasks, leads small projects, and mentors junior developers.</li>
            <li><strong>Senior Game Developer:</strong> Leads game development projects, makes architectural decisions, and ensures high-quality code standards.</li>
            <li><strong>Lead Game Developer or Technical Director:</strong> Oversees game development teams, manages project scope, and ensures project alignment with vision.</li>
            <li><strong>Game Development Manager or Director:</strong> Manages multiple projects, oversees development processes, and contributes to strategic planning.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
            <li><strong>Junior Game Developer:</strong> $0K - $62K/yr</li>
            <li><strong>Mid-Level Game Developer:</strong> $62K - $69K/yr</li>
            <li><strong>Senior Game Developer:</strong> $69K - $81K/yr</li>
            <li><strong>Lead Game Developer or Technical Director:</strong> $81K - $95K/yr</li>
            <li><strong>Game Development Manager or Director:</strong> $95K+/yr</li>
          </ul>
          <Typography variant="body2" color="textSecondary">
            Salary ranges sourced from payscale&nbsp;
            <a href="https://www.payscale.com/research/US/Job=Video_Game_Programmer/Salary">Game developer salary</a>
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Game development is highly sought-after due to the growing popularity of video games and the increasing demand for interactive entertainment. The industry offers creative opportunities and the chance to work on innovative and immersive experiences.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a game developer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start by learning the basics of game development through tutorials and courses. Apply what you learn by building simple games.</li>
            <li><strong>Interactive Learning:</strong> Use online platforms like Codecademy, Udemy, or Coursera to learn game development technologies interactively. These platforms provide hands-on exercises and projects to reinforce your learning.</li>
            <li><strong>Master a Game Engine:</strong> Choose a popular game engine such as Unity or Unreal Engine. Follow tutorials and build projects to understand its core concepts, asset management, and scripting.</li>
            <li><strong>Learn Game Programming:</strong> Choose a programming language relevant to game development, such as C# for Unity or C++ for Unreal Engine. Follow tutorials and build projects to understand game logic, physics, and AI.</li>
            <li><strong>Game Design Principles:</strong> Study game design principles, including level design, player experience, and storytelling. Practice by creating game prototypes and iterating based on feedback.</li>
            <li><strong>Build Game Projects:</strong> Develop a portfolio of game projects that showcase your skills. Start with small projects and gradually increase complexity to demonstrate your ability to handle real-world scenarios.</li>
            <li><strong>Contribute to Game Jams:</strong> Participate in game jams to collaborate with other developers, gain practical experience, and build a professional network.</li>
            <li><strong>Stay Updated:</strong> Follow industry blogs, podcasts, and forums to stay informed about the latest trends, tools, and best practices in game development. Experiment with new technologies and game design techniques to keep your skills up to date.</li>
            <li><strong>Join Game Development Communities:</strong> Engage with online communities such as Stack Overflow, Reddit, and Discord groups. Seek help, share knowledge, and collaborate with other developers to enhance your learning experience.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="https://www.udemy.com/course/unitycourse/" target="_blank" rel="noopener noreferrer">Udemy - Complete C# Unity Game Developer 2D</a> - Comprehensive course covering Unity game development fundamentals.</li>
            <li><a href="https://www.udemy.com/course/unreal-engine-the-ultimate-game-developer-course/" target="_blank" rel="noopener noreferrer">Udemy - Unreal Engine: The Ultimate Game Developer Course</a> - Master Unreal Engine by building real-world games.</li>            
          </ul>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books:
          </Typography>
          <ul>
            <li><strong>"Game Programming Patterns" by Robert Nystrom:</strong> A great resource for understanding game development patterns and best practices.</li>
            <li><strong>"The Art of Game Design: A Book of Lenses" by Jesse Schell:</strong> Comprehensive guide to game design principles and practices.</li>
            <li><strong>"Clean Code: A Handbook of Agile Software Craftsmanship" by Robert C. Martin:</strong> Learn best practices for writing clean and maintainable code.</li>            
            <li><strong>"Game Design Workshop: A Playcentric Approach to Creating Innovative Games" by Tracy Fullerton</strong> - Explore game design concepts and methodologies.</li>
            <li><strong>"Unity in Action: Multiplatform Game Development in C# with Unity" by Joseph Hocking</strong> - Learn game development with Unity using C#.</li>
          </ul>
        </Box>
      </Container>

      {showBackToTop && (
        <Fab
          color="primary"
          aria-label="scroll back to top"
          style={{ position: 'fixed', bottom: 16, right: 16 }}
          onClick={handleScrollToTop}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}

      <Footer />
    </div>
  );
};

export default GameDeveloperPage;