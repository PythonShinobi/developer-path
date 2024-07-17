// client/src/components/java-developer/JavaDeveloper.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Menu, MenuItem, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Reddit, X, Facebook, Pinterest, LinkedIn } from '@mui/icons-material';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 * JavaDeveloperPage Component
 * 
 * This component renders information about Java development,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and resources. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const JavaDeveloperPage = () => {
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

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
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
            Java Developer
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
            Java developers are skilled programmers who specialize in writing server-side applications and web services using the Java programming language.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Java Developer</li>
            <li>Backend Developer</li>
            <li>Enterprise Applications Developer</li>
            <li>Software Engineer</li>
            <li>Full Stack Java Developer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Designing and developing high-volume, low-latency applications for mission-critical systems and delivering high-availability and performance.</li>
            <li>Contributing in all phases of the development lifecycle.</li>
            <li>Writing well-designed, efficient, and testable code.</li>
            <li>Conducting software analysis, programming, testing, and debugging.</li>
            <li>Ensuring designs comply with specifications and preparing and producing releases of software components.</li>
            <li>Supporting continuous improvement by investigating alternatives and technologies and presenting these for architectural review.</li>
            <li>Maintaining and improving existing codebases and peer review code changes.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in Java, with a good understanding of its ecosystems.</li>
            <li>Knowledge of concurrency patterns in Java.</li>
            <li>Familiarity with Java GUI frameworks such as Swing, SWT, and AWT depending on project requirements.</li>
            <li>Understanding of the class loading mechanism in Java.</li>
            <li>Experience with RESTful web services.</li>
            <li>Experience in designing and developing applications using Java EE platforms.</li>
            <li>Object-oriented analysis and design using common design patterns.</li>
            <li>Profound insight into Java and JEE internals (Classloading, Memory Management, Transaction management, etc.).</li>
            <li>Excellent knowledge of Relational Databases, SQL, and ORM technologies (JPA2, Hibernate).</li>
            <li>Experience in developing web applications using at least one popular web framework (JSF, Wicket, GWT, Spring MVC).</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Java development offers numerous opportunities for career advancement. Here are common stages in a Java developer's career progression:
          </Typography>
          <ul>
            <li><strong>Junior Java Developer:</strong> Entry-level position focusing on learning and implementing Java technologies.</li>
            <li><strong>Mid-Level Java Developer:</strong> Takes on more complex projects, leads smaller teams, and mentors junior developers.</li>
            <li><strong>Senior Java Developer:</strong> Leads Java projects, makes architectural decisions, and ensures high-quality code standards.</li>
            <li><strong>Technical Lead or Java Architect:</strong> Responsible for technical strategy, guiding teams, and implementing best practices across projects.</li>
            <li><strong>Development Manager or Director:</strong> Manages development teams, oversees multiple projects, and contributes to organizational strategy.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
            <li><strong>Junior Java Developer:</strong> $68K - $123K/yr</li>
            <li><strong>Mid-Level Java Developer:</strong> $80K - $143K/yr</li>
            <li><strong>Senior Java Developer:</strong> $88K - $156K/yr</li>
            <li><strong>Technical Lead or Java Architect:</strong> $96K - $170K/yr</li>
            <li><strong>Java Manager or Director:</strong> $170K+/yr</li>
          </ul>

          <Typography variant="body2" color="textSecondary">
            Salary ranges sourced from Glassdoor.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Java development is highly sought-after due to its platform independence, scalability, and wide use in enterprise-level applications. Java developers are in demand for building robust, scalable systems that can handle large volumes of transactions and users.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Java Developer
          </Typography>
          <ul>
            <li>Learn the fundamentals of Java programming.</li>
            <li>Master Java frameworks like Spring and Hibernate.</li>
            <li>Understand database management with SQL and JDBC.</li>
            <li>Build projects to showcase your skills in web development, enterprise applications, or Android apps.</li>
            <li>Contribute to open-source projects or participate in coding competitions.</li>
            <li>Stay updated with the latest Java trends and best practices.</li>
            <li>Consider obtaining certifications like Oracle Certified Professional, Java SE Programmer.</li>
            <li>Network with other Java developers and attend conferences or workshops.</li>
            <li>Continuously improve your problem-solving and debugging skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a Java developer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start by learning the basics of Java through tutorials and courses. Apply what you learn by building simple applications.</li>
            <li><strong>Interactive Learning:</strong> Use online platforms like Codecademy, Udemy, or Coursera to learn Java interactively. These platforms provide hands-on exercises and projects to reinforce your learning.</li>
            <li><strong>Master Java Frameworks:</strong> Focus on popular Java frameworks like Spring and Hibernate. Follow tutorials and build projects to understand their core concepts and best practices.</li>
            <li><strong>Enterprise Application Development:</strong> Study enterprise-level application development using Java EE platforms. Learn about servlets, JSP, EJB, and other technologies commonly used in enterprise environments.</li>
            <li><strong>Android Development:</strong> If interested in mobile development, explore Android app development using Java. Build apps, learn about Android SDK, and understand app lifecycle and UI design.</li>
            <li><strong>Collaborate and Contribute:</strong> Join coding communities, participate in open-source projects, and collaborate with other developers. Contributing to real-world projects will enhance your skills and provide valuable experience.</li>
            <li><strong>Continuous Learning:</strong> Stay updated with the latest trends and advancements in Java development. Follow blogs, subscribe to newsletters, and join relevant online communities.</li>
            <li><strong>Problem-Solving and Algorithms:</strong> Practice solving coding challenges on platforms like LeetCode, HackerRank, or CodeSignal. Focus on improving your problem-solving skills and understanding data structures and algorithms.</li>
            <li><strong>Debugging and Testing:</strong> Learn debugging techniques and tools to identify and fix issues in your code. Write unit tests to ensure the reliability and correctness of your applications.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <Typography variant="body1" paragraph>
            Here are some recommended study resources to help you become a Java developer:
          </Typography>
          <ul>
            <li><a href="https://www.udemy.com/course/java-the-complete-java-developer-course/" target="_blank" rel="noopener noreferrer">Udemy - Java Programming Masterclass for Software Developers</a> - Comprehensive Java course covering core concepts and advanced topics.</li>
            <li><a href="https://www.udemy.com/course/java-programming-tutorial-for-beginners/" target="_blank" rel="noopener noreferrer">Udemy - Java Programming for Beginners</a> - Learn Java basics and fundamentals through practical examples and exercises.</li>
            <li><a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">Oracle Java Documentation</a> - Official documentation for Java SE, Java EE, and other Java technologies.</li>
            <li><a href="https://www.baeldung.com/" target="_blank" rel="noopener noreferrer">Baeldung</a> - Java tutorials and articles covering various Java frameworks and libraries.</li>
            <li><a href="https://www.javatpoint.com/" target="_blank" rel="noopener noreferrer">JavaTpoint</a> - Free online tutorials and courses on Java programming and related technologies.</li>
            <li><a href="https://stackoverflow.com/questions/tagged/java" target="_blank" rel="noopener noreferrer">Stack Overflow - Java Tag</a> - Community-driven Q&A for Java developers to solve specific programming problems.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books
          </Typography>
          <ul>
            <li><strong>Effective Java</strong> by Joshua Bloch</li>
            <li><strong>Head First Java</strong> by Kathy Sierra and Bert Bates</li>
            <li><strong>Java: The Complete Reference</strong> by Herbert Schildt</li>
            <li><strong>Java Concurrency in Practice</strong> by Brian Goetz</li>
            <li><strong>Java Performance: The Definitive Guide</strong> by Scott Oaks</li>
            <li><strong>Clean Code: A Handbook of Agile Software Craftsmanship</strong> by Robert C. Martin</li>
            <li><strong>Java Programming for Beginners: Learn Java the Easy Way</strong> by Troy Dimes</li>
          </ul>
        </Box>

        {showBackToTop && (
          <Fab
            color="primary"
            size="small"
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

export default JavaDeveloperPage;