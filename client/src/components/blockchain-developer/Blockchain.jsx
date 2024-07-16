// client/src/blockchain-developer/Blockchain.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Fab } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import GetAppIcon from '@mui/icons-material/GetApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

/**
 * BlockchainDeveloperPage Component
 * 
 * This component renders information about blockchain development,
 * including job titles, responsibilities, skills, career progression,
 * study methods, and resources. It also includes buttons for sharing and downloading
 * content and a "Back to Top" button for easy navigation.
 */
const BlockchainDeveloperPage = () => {
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
            Blockchain Developer
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
            Blockchain developers specialize in creating and implementing digital solutions using blockchain technology. They work on developing decentralized applications (dApps) and smart contracts.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Potential Job Titles
          </Typography>
          <ul>
            <li>Blockchain Developer</li>
            <li>Blockchain Engineer</li>
            <li>Smart Contract Developer</li>
            <li>Decentralized Application (dApp) Developer</li>
            <li>Blockchain Architect</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Designing and developing blockchain protocols.</li>
            <li>Developing smart contracts and decentralized applications.</li>
            <li>Implementing security measures to safeguard blockchain assets.</li>
            <li>Collaborating with other developers and stakeholders to integrate blockchain solutions.</li>
            <li>Maintaining and extending existing blockchain applications.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Skills and Competencies
          </Typography>
          <ul>
            <li>Proficiency in blockchain platforms like Ethereum, Hyperledger, or Corda.</li>
            <li>Experience with smart contract languages such as Solidity or Vyper.</li>
            <li>Understanding of cryptographic principles and data structures.</li>
            <li>Knowledge of decentralized technologies and distributed ledger technology (DLT).</li>
            <li>Familiarity with version control systems (e.g., Git).</li>
            <li>Ability to write clean, maintainable code and follow coding standards.</li>
            <li>Problem-solving skills and attention to detail.</li>
            <li>Good communication and collaboration skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Career Path and Progression
          </Typography>
          <Typography variant="body1" paragraph>
            Blockchain development offers numerous opportunities for career advancement. Here are common stages in a blockchain developer's career progression:
          </Typography>
          <ul>
            <li><strong>Junior Blockchain Developer:</strong> Entry-level position focusing on learning and implementing blockchain technologies.</li>
            <li><strong>Mid-Level Blockchain Developer:</strong> Takes on more complex projects, leads smaller teams, and mentors junior developers.</li>
            <li><strong>Senior Blockchain Developer:</strong> Leads blockchain projects, makes architectural decisions, and ensures high-quality code standards.</li>
            <li><strong>Blockchain Architect:</strong> Responsible for technical strategy, guiding teams, and implementing best practices across projects.</li>
            <li><strong>Development Manager or Director:</strong> Manages development teams, oversees multiple projects, and contributes to organizational strategy.</li>
          </ul>
        </Box>

        <Box mt={4}>
        <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
          Salaries
        </Typography>
        <ul>
          <li><strong>Junior Blockchain Developer:</strong> $70,000 - $90,000 annually</li>
          <li><strong>Mid-Level Blockchain Developer:</strong> $90,000 - $110,000 annually</li>
          <li><strong>Senior Blockchain Developer:</strong> $110,000 - $140,000 annually</li>
          <li><strong>Lead Blockchain Developer or Blockchain Architect:</strong> $140,000 - $170,000 annually</li>
          <li><strong>Chief Blockchain Developer or Director of Blockchain Development:</strong> $170,000+ annually</li>
        </ul>
      </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Why It's Sought-After
          </Typography>
          <Typography variant="body1" paragraph>
            Blockchain development is highly sought-after due to the increasing demand for secure and decentralized solutions. Blockchain developers are essential in creating the infrastructure for cryptocurrencies, smart contracts, and other decentralized technologies.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            How to Become a Blockchain Developer
          </Typography>
          <ul>
            <li>Learn the fundamentals of blockchain technology and its applications.</li>
            <li>Master a blockchain platform such as Ethereum or Hyperledger.</li>
            <li>Learn a smart contract language like Solidity.</li>
            <li>Understand cryptographic principles and data structures.</li>
            <li>Build blockchain projects to showcase your skills.</li>
            <li>Collaborate on open-source projects or contribute to community forums.</li>
            <li>Stay updated with the latest trends and best practices in blockchain development.</li>
            <li>Consider specializing in areas like DeFi (Decentralized Finance) or NFTs (Non-Fungible Tokens).</li>
            <li>Network with other developers and attend conferences or workshops.</li>
            <li>Continuously improve your problem-solving and debugging skills.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Methods and Strategies
          </Typography>
          <Typography variant="body1" paragraph>
            Here are detailed study methods and strategies to help you become a blockchain developer:
          </Typography>
          <ul>
            <li><strong>Hands-on Practice:</strong> Start by learning the basics of blockchain technology through tutorials and courses. Apply what you learn by building simple blockchain applications.</li>
            <li><strong>Interactive Learning:</strong> Use online platforms like Codecademy, FreeCodeCamp, or Udemy to learn blockchain technologies interactively. These platforms provide hands-on exercises and projects to reinforce your learning.</li>
            <li><strong>Master a Blockchain Platform:</strong> Choose a popular blockchain platform such as Ethereum. Follow tutorials and build projects to understand its core concepts, smart contracts, and dApp development.</li>
            <li><strong>Learn Smart Contract Development:</strong> Choose a smart contract language like Solidity. Follow tutorials and build projects to understand contract development, deployment, and interaction.</li>
            <li><strong>Blockchain Security:</strong> Study blockchain security principles and practices. Understand common vulnerabilities and how to protect against them.</li>
            <li><strong>Build Blockchain Projects:</strong> Develop a portfolio of blockchain projects that showcase your skills. Start with small projects and gradually increase complexity to demonstrate your ability to handle real-world scenarios.</li>
            <li><strong>Contribute to Open Source:</strong> Participate in open-source projects related to blockchain development. This allows you to collaborate with experienced developers, gain practical experience, and build a professional network.</li>
            <li><strong>Stay Updated:</strong> Follow industry blogs, podcasts, and forums to stay informed about the latest trends, tools, and best practices in blockchain development. Experiment with new technologies and frameworks to keep your skills up to date.</li>
            <li><strong>Join Developer Communities:</strong> Engage with online communities such as Stack Overflow, GitHub, and Reddit. Seek help, share knowledge, and collaborate with other developers to enhance your learning experience.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Study Resources
          </Typography>
          <ul>
            <li><a href="http://udemy.com/course/blockchain-and-cryptocurrency-explained" target="_blank" rel="noopener noreferrer">Udemy - Blockchain and Cryptocurrency Courses</a></li>
            <li><a href="http://coursera.org/specializations/blockchain" target="_blank" rel="noopener noreferrer">Blockchain Specialization - Coursera</a></li>
            <li><a href="http://edx.org/learn/blockchain" target="_blank" rel="noopener noreferrer">Blockchain Courses - edX</a></li>            
            <li><a href="http://github.com/ethereum/ethereum-org-website" target="_blank" rel="noopener noreferrer">Ethereum Developer Resources</a></li>
            <li><a href="http://freecodecamp.org/news/tag/blockchain" target="_blank" rel="noopener noreferrer">FreeCodeCamp Blockchain Articles</a></li>
            <li><a href="http://hyperledger.org/learn" target="_blank" rel="noopener noreferrer">Hyperledger Learning Resources</a></li>
          </ul>

          <Typography variant="h5" gutterBottom style={{ fontWeight: 530 }}>
            Recommended Books:
          </Typography>
          <ul>
            <li><strong>"Mastering Blockchain" by Imran Bashir:</strong> In-depth guide to blockchain technology, covering various platforms and advanced concepts.</li>
            <li><strong>"Blockchain Basics: A Non-Technical Introduction in 25 Steps" by Daniel Drescher:</strong> Accessible introduction to blockchain technology for beginners.</li>
            <li><strong>"Blockchain Revolution" by Don Tapscott and Alex Tapscott:</strong> Insightful book on how blockchain technology is transforming the world.</li>
            <li><strong>"The Basics of Bitcoins and Blockchains" by Antony Lewis:</strong> Comprehensive guide to blockchain, cryptocurrencies, and the technology behind them.</li>
            <li><strong>"Cryptoassets: The Innovative Investor's Guide to Bitcoin and Beyond" by Chris Burniske and Jack Tatar:</strong> Detailed guide on investing in blockchain and cryptocurrencies.</li>
          </ul>
        </Box>

        {showBackToTop && (
          <Fab
            color="primary"
            size="small"
            aria-label="scroll back to top"
            onClick={handleScrollToTop}
            style={{
              position: 'fixed',
              bottom: '16px',
              right: '16px',
              zIndex: 1000,
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default BlockchainDeveloperPage;
