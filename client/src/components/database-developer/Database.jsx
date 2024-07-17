// client/src/database-developer/Database.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Menu, MenuItem, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 * DatabaseDeveloperPage Component
 * 
 * This component renders information about database development,
 * including job titles, responsibilities, skills, career progression,
 * and study methods. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const DatabaseDeveloperPage = () => {
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
            Database Developer
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
              <MenuItem onClick={() => shareContent('twitter')}>Twitter</MenuItem>
              <MenuItem onClick={() => shareContent('facebook')}>Facebook</MenuItem>
              <MenuItem onClick={() => shareContent('reddit')}>Reddit</MenuItem>
              <MenuItem onClick={() => shareContent('pinterest')}>Pinterest</MenuItem>
              <MenuItem onClick={() => shareContent('linkedin')}>LinkedIn</MenuItem>                        
            </Menu>
          </Box>
          <Typography variant="body1" paragraph>
            Database developers specialize in designing, implementing, and maintaining databases that support applications and businesses. They work with technologies like PostgreSQL, MySQL, MongoDB, and SQL Server to ensure efficient data storage and retrieval.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Database Developer</li>
            <li>Database Administrator (DBA)</li>
            <li>Data Engineer</li>
            <li>SQL Developer</li>
            <li>NoSQL Developer</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Designing and implementing database schemas and structures.</li>
            <li>Optimizing queries and ensuring database performance.</li>
            <li>Managing data security and access control.</li>
            <li>Integrating databases with applications and backend systems.</li>
            <li>Performing database maintenance, backups, and recovery tasks.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in SQL (Structured Query Language) and database management systems.</li>
            <li>Experience with database design, normalization, and optimization.</li>
            <li>Knowledge of relational databases like PostgreSQL, MySQL, or SQL Server.</li>
            <li>Familiarity with NoSQL databases such as MongoDB or Cassandra.</li>
            <li>Understanding of data modeling and ETL (Extract, Transform, Load) processes.</li>
            <li>Ability to troubleshoot database-related issues and performance bottlenecks.</li>
            <li>Knowledge of database security best practices and compliance standards.</li>
            <li>Strong analytical and problem-solving skills.</li>
            <li>Effective communication and collaboration skills with developers and stakeholders.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Database development offers various paths for specialization and career advancement. Here are common stages in a database developer's career progression:
          </Typography>
          <ul>
            <li><strong>Junior Database Developer:</strong> Entry-level position focusing on learning database fundamentals and basic administration tasks.</li>
            <li><strong>Database Administrator (DBA):</strong> Manages and maintains databases, handles backups, and ensures data security.</li>
            <li><strong>Data Engineer:</strong> Designs and builds scalable data pipelines and ETL processes.</li>
            <li><strong>Senior Database Developer:</strong> Leads database design projects, optimizes database performance, and mentors junior developers.</li>
            <li><strong>Database Architect:</strong> Designs database systems, defines standards, and oversees database strategy and implementation.</li>
            <li><strong>Chief Data Officer (CDO):</strong> Provides strategic direction for data management and oversees enterprise-wide data governance.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Salaries
          </Typography>
          <ul>
            <li><strong>Junior Database Developer:</strong> $63K - $108K/yr</li>
            <li><strong>Mid-Level Database Developer:</strong> $71K - $120K/yr</li>
            <li><strong>Senior Database Developer:</strong> $78K - $132K/yr</li>
            <li><strong>Technical Lead or Database Architect:</strong> $83K - $141K/yr</li>
            <li><strong>Database Manager or Director:</strong> $141K+/yr</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Database development is critical for organizations to manage and analyze large volumes of data effectively. With the increasing importance of data-driven insights, skilled database developers are in high demand across industries.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Database Developer
          </Typography>
          <ul>
            <li>Master SQL and database management fundamentals.</li>
            <li>Learn database design principles and normalization techniques.</li>
            <li>Consider specializing in areas like data warehousing or database security.</li>
            <li>Gain hands-on experience with a variety of database systems (relational and NoSQL).</li>
            <li>Understand ETL processes and data integration techniques.</li>
            <li>Practice optimizing queries and database performance.</li>
            <li>Build projects that showcase your database development skills.</li>
            <li>Obtain certifications in relevant database technologies (e.g., Oracle Certified Associate).</li>
            <li>Stay updated with emerging trends in database technologies and data management.</li>
            <li>Network with database professionals and join industry forums or user groups.</li>
            <li>Consider pursuing advanced degrees in computer science or data engineering for career advancement.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a database developer:
          </Typography>
          <ul>
            <li><strong>Learn SQL Basics:</strong> Start with basic SQL tutorials and courses to understand data querying and manipulation.</li>
            <li><strong>Practice Database Design:</strong> Study relational database design principles, normalization, and schema creation.</li>
            <li><strong>Explore NoSQL Databases:</strong> Learn about non-relational databases like MongoDB or Cassandra and their use cases.</li>
            <li><strong>Hands-on Projects:</strong> Build database-driven applications or projects that involve data modeling, CRUD operations, and performance optimization.</li>
            <li><strong>Database Administration:</strong> Gain practical experience in managing databases, including backup and recovery procedures.</li>
            <li><strong>Advanced Topics:</strong> Study advanced database concepts such as transactions, indexing, and concurrency control.</li>
            <li><strong>Certification Preparation:</strong> Prepare for database certifications (e.g., Oracle Certified Professional) to validate your skills and knowledge.</li>
            <li><strong>Stay Updated:</strong> Follow database blogs, forums, and conferences to stay informed about new technologies and best practices.</li>
            <li><strong>Networking:</strong> Connect with database professionals through online communities, meetups, or industry events to share knowledge and opportunities.</li>
            <li><strong>Continuous Learning:</strong> Embrace lifelong learning and continually seek to deepen your understanding of database technologies and their applications.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/" target="_blank" rel="noopener noreferrer">Udemy - The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert</a></li>
            <li><a href="https://www.coursera.org/specializations/learn-sql-basics-data-science" target="_blank" rel="noopener noreferrer">Coursera - Learn SQL Basics for Data Science Specialization</a></li>
            <li><a href="https://www.datacamp.com/courses/introduction-to-relational-databases-in-python" target="_blank" rel="noopener noreferrer">DataCamp - Introduction to Relational Databases in Python</a></li>                        
            <li><a href="https://www.udemy.com/course/sql-and-postgresql/" target="_blank" rel="noopener noreferrer">Udemy - SQL and PostgreSQL: The Complete Developer's Guide</a></li>
            <li><a href="https://www.udemy.com/course/mongodb-the-complete-developers-guide/" target="_blank" rel="noopener noreferrer">Udemy - MongoDB - The Complete Developer's Guide 2024</a></li>
          </ul>

          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books:
          </Typography>
          <ul>
            <li><strong>"SQL Performance Explained" by Markus Winand:</strong> A practical guide to SQL query optimization and performance tuning.</li>
            <li><strong>"Database Design for Mere Mortals" by Michael J. Hernandez:</strong> A comprehensive guide to designing relational databases with clarity and accuracy.</li>
            <li><strong>"Seven Databases in Seven Weeks" by Eric Redmond and Jim R. Wilson:</strong> Explore various database technologies and their use cases.</li>
            <li><strong>"Learning SQL" by Alan Beaulieu:</strong> A hands-on guide to mastering SQL queries and database operations.</li>
            <li><strong>"The Data Warehouse Toolkit" by Ralph Kimball and Margy Ross:</strong> Learn data warehousing design and implementation techniques.</li>
          </ul>
        </Box>

        {/* Back to Top Button */}
        {showBackToTop &&
          <Fab color="primary" aria-label="scroll back to top" onClick={handleScrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <KeyboardArrowUpIcon />
          </Fab>
        }
      </Container>
      <Footer />
    </div>
  );
};

export default DatabaseDeveloperPage;