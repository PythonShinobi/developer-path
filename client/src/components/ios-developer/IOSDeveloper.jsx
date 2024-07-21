// client/src/components/ios-developer/IOSDeveloperPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Menu, MenuItem, Fab } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
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
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Example breakpoint for small screens

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
      <Container maxWidth="md">
        <Box mt={4} textAlign="center">
          <Typography variant={isSmallScreen ? 'h4' : 'h3'} gutterBottom style={{ fontWeight: 600, fontFamily: 'Arial, sans-serif' }}>
            iOS Developer
          </Typography>
          <Box mt={2} mb={4} display="flex" justifyContent="center">
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
          <img 
            src="https://res.cloudinary.com/ddtded6wc/image/upload/v1721549451/2150038902_vd9cyt.jpg" 
            alt="iOS Development" 
            style={{ width: '100%', height: 'auto', maxWidth: '800px', marginBottom: '20px' }}
          />
          <Box display="flex" justifyContent="center" id="introduction">
            <Box maxWidth="md">
              <Typography 
                variant="body1" 
                paragraph 
                style={{ 
                  textAlign: 'left', 
                  lineHeight: '1.8', 
                  marginBottom: '20px', 
                  fontFamily: 'Georgia, serif', 
                  fontSize: '18px', 
                  color: '#333' 
                }}
              >
                iOS developers <strong>design and develop applications for Apple's iOS platform</strong>, which includes iPhones and iPads. <strong>They primarily use Swift and Objective-C</strong> for programming and leverage Xcode and the iOS SDK to create, test, and release their apps. 
                Their role extends beyond just coding; iOS developers are also responsible for crafting intuitive user interfaces, architecting application structures, and integrating various functionalities. They must ensure that their apps are smooth, engaging, and compliant with Apple's design principles. 
                Collaboration is key, as iOS developers often work closely with UX/UI designers, project managers, and fellow developers to produce high-quality applications. They are tasked with troubleshooting and resolving bugs, enhancing app performance, and keeping their apps updated with the latest iOS features and device specifications. 
                To maintain a competitive edge, iOS developers need to stay abreast of emerging trends and advancements in mobile technology. This involves exploring new tools, frameworks, and development practices. Engaging in code reviews and contributing to community projects are also excellent ways to sharpen their expertise.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box mt={3}>
          <Typography 
            variant={isSmallScreen ? 'h5' : 'h4'}
            id="job-titles"
            gutterBottom 
            style={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              textAlign: 'left' 
            }}
          >
            Potential Job Titles
          </Typography>
          <Box textAlign="center" mb={3}>
            <Typography 
              variant="body1" 
              paragraph 
              style={{ 
                textAlign: 'left', 
                lineHeight: '1.8', 
                marginBottom: '20px', 
                fontFamily: 'Georgia, serif', 
                fontSize: '18px', 
                color: '#333' 
              }}
            >
              With a solid foundation in iOS development, you can explore various career paths in the tech industry. The demand for skilled iOS developers continues to grow as mobile technology evolves. Here are some potential job titles that you may consider:
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box maxWidth="md">
              <ul style={{ textAlign: 'left', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
                <li><strong>iOS Developer</strong>: Focuses on creating and maintaining applications specifically for Apple's iOS platform. They use Swift and Objective-C to develop apps that run smoothly on iPhones and iPads.</li>
                <li><strong>Mobile Developer</strong>: Works on building apps for multiple mobile platforms, including iOS and Android. Proficiency in cross-platform frameworks such as Flutter or React Native is often required.</li>
                <li><strong>App Developer</strong>: A general role that involves developing applications for various environments, including mobile, web, and desktop. For mobile apps, this includes both iOS and Android platforms.</li>
                <li><strong>Software Engineer</strong>: Engages in designing, coding, testing, and maintaining software applications across different platforms. This role covers a broad range of software development activities, including mobile, web, and desktop applications.</li>
                <li><strong>Lead Mobile Developer</strong>: A senior-level position responsible for leading a team of developers in creating mobile applications. This role requires extensive experience in mobile development and strong leadership and project management abilities.</li>
              </ul>
            </Box>
          </Box>
        </Box>

        <Box mt={4} textAlign="center">
          <Typography
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom 
            style={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              textAlign: 'left' 
            }}
          >
            Responsibilities
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            As an iOS developer, your primary responsibilities involve creating and maintaining applications specifically for Apple's iOS devices, such as iPhones and iPads. This entails <strong>designing and developing robust and user-friendly apps</strong> that leverage Swift and Objective-C, and utilizing tools like Xcode and the iOS SDK.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Ensuring the performance and responsiveness of applications</strong> is crucial. You will need to rigorously test and debug apps to ensure they run smoothly and efficiently across various iOS devices and screen sizes. This involves <strong>optimizing app performance</strong> and making necessary adjustments to deliver a seamless user experience.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            Collaboration with <strong>cross-functional teams</strong> is a key part of the role. You will work closely with designers, product managers, and other developers to define, design, and implement new features, ensuring that the application meets both user needs and business objectives.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Identifying and addressing performance issues and bugs</strong> is essential. This includes analyzing code for bottlenecks, debugging, and implementing fixes to enhance the application's stability and efficiency.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Maintaining high standards in code quality and organization</strong> is vital for long-term project success. You will follow best practices in coding, participate in code reviews, and use automation tools to ensure consistent and high-quality output.
          </Typography>          
        </Box>

        <Box mt={4} textAlign="center">
          <Typography
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom 
            style={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              textAlign: 'left' 
            }}
          >
            Skills and Competencies
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            To thrive as an iOS developer, several key skills and competencies are crucial. <strong>Proficiency in Swift and Objective-C programming languages</strong> is essential, as these are the primary languages used for iOS development. 
            <strong>Experience with iOS frameworks such as Core Data, Core Animation, and others</strong> is important for building rich and interactive applications within the iOS ecosystem.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>A thorough understanding of Apple's design principles and interface guidelines</strong> is necessary to create applications that are both visually appealing and user-friendly. 
            This includes adhering to <strong>Human Interface Guidelines</strong> and implementing them effectively in your applications.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Knowledge of RESTful APIs</strong> is crucial for connecting iOS applications to back-end services. This involves making network requests, processing responses, and integrating data into your application.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Familiarity with UI/UX standards</strong> is key for developing applications that offer an intuitive and engaging user experience. 
            This involves designing user interfaces that are both functional and aesthetically pleasing.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>An understanding of code versioning tools such as Git</strong> is important for managing and tracking changes within your codebase. 
            This includes proficiency with branching, merging, and collaboration workflows.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Experience with performance and memory optimization using tools like Instruments</strong> is necessary to ensure your applications run efficiently. 
            This involves identifying and resolving performance bottlenecks and memory issues to provide a smooth user experience.
          </Typography>          
        </Box>

        <Box mt={4} textAlign="center">
          <Typography
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom 
            style={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              textAlign: 'left' 
            }}
          >
            Career Path and Progression
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            iOS development offers a clear career trajectory with various stages of advancement. As you build experience and hone your skills, you can progress through the following key roles:
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Junior iOS Developer:</strong> This entry-level position focuses on acquiring and applying foundational iOS development skills. You'll work on smaller tasks and projects under the supervision of more experienced developers, helping you build a solid base in iOS development tools and practices.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Mid-Level iOS Developer:</strong> At this stage, you will handle more complex projects and start taking on leadership roles within small teams. You'll mentor junior developers, contribute to significant features, and begin to take on responsibilities that require a deeper understanding of iOS development and project management.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Senior iOS Developer:</strong> As a senior developer, you will lead major iOS projects, make critical architectural decisions, and ensure high standards across your team's work. This role demands extensive experience in iOS development, along with strong leadership and problem-solving skills.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Lead iOS Developer:</strong> In this position, you will set the overall technical direction and strategy for iOS projects. You'll oversee multiple projects, guide technical decisions, and ensure that development aligns with the company's goals and objectives.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ 
              textAlign: 'left', 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              fontFamily: 'Arial, sans-serif' 
            }}
          >
            <strong>Mobile Development Manager or Director:</strong> At the highest level, you'll manage mobile development teams, oversee the execution of multiple projects, and contribute to the broader strategic direction of the organization. This role combines technical leadership with strategic planning and team management.
          </Typography>          
        </Box>

        <Box mt={4} textAlign="center">
          <Typography
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom 
            style={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              textAlign: 'left' 
            }}
          >
            Salaries
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}
          >
            iOS developer salaries can vary greatly depending on factors such as experience, geographic location, the size of the employer, and the industry. Here’s a look at how these elements influence salary expectations:
            <br /><br />
            <strong>1. Experience:</strong> Experience plays a crucial role in determining salary levels. Entry-level iOS developers, with less than a year of experience, typically earn lower salaries as they are still learning the ropes of iOS development. As developers accumulate experience and demonstrate their ability to tackle more complex projects, their salaries generally increase.
            <br /><br />
            <strong>2. Location:</strong> The location of an iOS developer significantly impacts salary expectations. Developers in major tech hubs like San Francisco, New York, or Los Angeles often receive higher compensation compared to those in less tech-focused areas. This is due to the higher living costs and competitive job markets in these regions.
            <br /><br />
            <strong>3. Company Size and Industry:</strong> The size of the company and the industry it operates in also affect salary ranges. Larger organizations, especially in the tech sector, may offer more competitive salaries and benefits compared to smaller companies or those in less competitive industries. Sectors with high demand for iOS expertise, such as fintech or healthcare tech, may provide more attractive compensation packages.
            <br /><br />
            Below is a summary of typical salary ranges for iOS developers based on years of experience:
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ textAlign: 'left', lineHeight: '1.6', marginBottom: '20px' }}
          >
            <strong>0-1 Year:</strong> For newcomers to the field, salaries usually fall between <strong>$76K - $139K annually</strong>. This range is typical for entry-level roles where developers are gaining hands-on experience and developing their skills.
            <br /><br />
            <strong>1-3 Years:</strong> Developers with a few years of experience can expect to earn between <strong>$89K - $163K annually</strong>. At this stage, they may be handling more complex assignments and beginning to take on leadership responsibilities.
            <br /><br />
            <strong>4-6 Years:</strong> iOS developers with four to six years of experience generally see salaries ranging from <strong>$98K - $181K annually</strong>. They often take on significant project roles and may mentor less experienced developers.
            <br /><br />
            <strong>7-9 Years:</strong> Those with seven to nine years of experience typically earn between <strong>$106K - $197K annually</strong>. They usually take on senior roles involving project leadership and key decision-making.
            <br /><br />
            <strong>10-14 Years:</strong> Senior developers with ten to fourteen years of experience can expect salaries from <strong>$116K - $216K annually</strong>. They often hold high-level positions, leading major projects and overseeing development teams.
            <br /><br />
            <strong>15+ Years:</strong> For iOS developers with over fifteen years of experience, salaries can range from <strong>$124K - $231K annually</strong>. These professionals typically occupy top leadership roles and have a significant influence on strategic decisions and company direction.
          </Typography>
          <Typography 
            variant="body2" 
            color="textSecondary" 
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            Salary data sourced from Glassdoor&nbsp;
            <a href="https://www.glassdoor.com/Salaries/ios-developer-salary-SRCH_KO0,13.htm">iOS developer salaries</a>.
          </Typography>
        </Box>     

        <Box mt={4} textAlign="center">
          <Typography 
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom 
            style={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              textAlign: 'left' 
            }}
          >
            Why It's Sought-After
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}
          >
            iOS development is highly sought-after due to the popularity of Apple devices and the demand for high-quality mobile applications. As iOS devices dominate the mobile market, businesses need skilled developers to create innovative and user-friendly apps that enhance the user experience and drive engagement.
          </Typography>
        </Box>
          
        <Box mt={4} textAlign="center">
          <Typography 
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom 
            style={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              textAlign: 'left' 
            }}
          >
            How to Become an iOS Developer
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}
          >
            Becoming an iOS developer involves a series of steps that will provide you with the skills and knowledge needed to create applications for the iOS platform. Follow this guide to set yourself up for success in iOS development:
            <br /><br />
            <strong>1. Learn Programming Languages:</strong> Begin by mastering the primary programming languages for iOS development: Swift and Objective-C. Swift is the modern language introduced by Apple, while Objective-C has been around longer and is still in use. Focus on learning the syntax, understanding object-oriented programming principles, and exploring how these languages interact with the iOS ecosystem.
            <br /><br />
            <strong>2. Get Acquainted with Xcode and iOS SDK:</strong> Familiarize yourself with Xcode, Apple's Integrated Development Environment (IDE) for iOS development, and the iOS Software Development Kit (SDK). Xcode provides tools for coding, debugging, and testing your applications, while the iOS SDK includes libraries and APIs essential for app development. Mastering these tools is vital for building and managing iOS apps.
            <br /><br />
            <strong>3. Develop and Publish Your Own iOS Apps:</strong> Practical experience is crucial. Start by building your own iOS applications to apply your knowledge. Begin with simple apps and gradually tackle more complex projects. Publishing your apps on the Apple App Store will give you hands-on experience with app releases, user feedback, and updates. It also helps you create a portfolio that demonstrates your skills to potential employers or clients.
            <br /><br />
            <strong>4. Understand iOS Design Guidelines and Best Practices:</strong> Study Apple's Human Interface Guidelines to ensure your apps are user-friendly and adhere to design best practices. This includes understanding principles of human-centered design, creating intuitive navigation, and ensuring responsive layouts. Delivering a seamless and engaging user experience is essential in iOS development.
            <br /><br />
            <strong>5. Engage with iOS Development Communities and Forums:</strong> Join online forums, communities, and local meetups to connect with other iOS developers. Participating in these communities can provide you with valuable insights, feedback, and support. Platforms like Stack Overflow, Reddit’s iOSProgramming subreddit, and specialized forums are excellent for asking questions, sharing your projects, and keeping up with the latest trends and technologies in iOS development.
            <br /><br />
            <strong>6. Consider Earning Relevant Certifications:</strong> Although not always necessary, obtaining certifications can validate your skills and enhance your resume. Certifications such as Apple’s App Development with Swift or other industry-recognized credentials can showcase your expertise and dedication to the field. They can also give you an advantage when applying for jobs or freelance positions.
          </Typography>
        </Box>
          
        <Box mt={4} textAlign="center">
          <Typography 
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom 
            style={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              textAlign: 'left' 
            }}
          >
            Study Methods and Strategies
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}
          >
            To excel as an iOS developer, a blend of practical experience, structured learning, and ongoing improvement is essential. Here’s a guide on study methods and strategies to support your development journey:
            <br /><br />
            <strong>1. Hands-on Practice:</strong> The most effective way to learn iOS development is by building real applications. Start with introductory tutorials to get acquainted with Xcode and the iOS SDK. Gradually work on projects such as a simple task manager or a news app to gain practical experience. Hands-on projects help reinforce your understanding and expose you to real-world challenges.
            <br /><br />
            <strong>2. Interactive Learning:</strong> Utilize online platforms like Udemy, Coursera, and Ray Wenderlich to find structured courses on iOS development. These platforms provide interactive exercises, quizzes, and practical projects that enhance your learning. Actively participate in course activities and work on projects that apply the concepts you’ve learned.
            <br /><br />
            <strong>3. Master iOS Design Guidelines:</strong> Familiarize yourself with Apple’s Human Interface Guidelines to design intuitive and visually appealing applications. Study principles related to layout, typography, color schemes, and navigation. Understanding key iOS components such as UIViewControllers, UITableViews, and UIStackViews is crucial for building effective and cohesive applications.
            <br /><br />
            <strong>4. Backend Integration:</strong> Modern iOS apps often need to connect with backend services and APIs. Learn how to integrate your apps with backend systems using libraries such as Alamofire for network requests and Core Data or Realm for local storage. Practice implementing user authentication, data synchronization, and efficient data management to create fully-featured applications.
            <br /><br />
            <strong>5. Build Projects:</strong> Develop a portfolio of iOS projects to demonstrate your skills and showcase your ability to create functional applications. Focus on different aspects, such as CRUD operations, user authentication, and user interface design. Document your projects with detailed descriptions, code samples, and screenshots to highlight your problem-solving abilities and technical skills.
            <br /><br />
            <strong>6. Contribute to Open Source:</strong> Getting involved in open-source iOS projects can provide valuable real-world experience and opportunities to collaborate with other developers. Contributing to open-source projects allows you to work with diverse codebases, improve your coding skills, and gain feedback from the community. Engage in code reviews, bug fixes, and feature development to enhance your experience and build your reputation.
            <br /><br />
            <strong>7. Specialize and Network:</strong> Consider focusing on specific areas of iOS development, such as augmented reality or enterprise apps. Attend iOS developer conferences, workshops, and meetups to network with industry professionals and stay updated on emerging trends and technologies. Networking can lead to new career opportunities and provide insights into the iOS development landscape.
            <br /><br />
            <strong>8. Continuous Improvement:</strong> Maintain a growth mindset and actively seek opportunities to expand your knowledge and skills. Pursue advanced certifications or specialized courses in areas like advanced iOS development, mobile security, or performance optimization. Keeping up with industry advancements and best practices will enhance your career prospects and keep you competitive in the field.
          </Typography>
        </Box>
          
        <Box mt={4} textAlign="center">
          <Typography 
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom 
            style={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              textAlign: 'left' 
            }}
          >
            Study Resources
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}
          >
            Explore these resources to accelerate your journey to becoming an iOS developer:
          </Typography>
          <Box maxWidth="md">
            <ul style={{ textAlign: 'left', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
              <li><a href="https://www.udemy.com/course/ios-13-app-development-bootcamp/" target="_blank" rel="noopener noreferrer">Udemy - iOS & Swift - The Complete iOS App Development Bootcamp</a> - Comprehensive course covering iOS app development with Swift.</li>
              <li><a href="https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift" target="_blank" rel="noopener noreferrer">Udemy - SwiftUI + SwiftData Masterclass - iOS App Development Swift</a> - Learn the basics of Swift and SwiftUI.</li>
              <li><a href="https://www.raywenderlich.com/ios" target="_blank" rel="noopener noreferrer">Ray Wenderlich - iOS Tutorials</a> - High-quality tutorials and articles for iOS development.</li>
            </ul>
          </Box>
          <Typography 
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom 
            style={{ 
              fontWeight: 700, 
              fontFamily: 'Georgia, serif', 
              textAlign: 'left' 
            }}
          >
            Recommended Books
          </Typography>
          <Box maxWidth="md">
            <ul style={{ textAlign: 'left', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
              <li><strong>"Swift Programming: The Big Nerd Ranch Guide" by Matthew Mathias and John Gallagher:</strong> A comprehensive guide to Swift programming.</li>
              <li><strong>"iOS Programming: The Big Nerd Ranch Guide" by Christian Keur and Aaron Hillegass:</strong> A practical guide to iOS development.</li>
              <li><strong>"Pro iOS Table Views and Collection Views" by Tim Duckett:</strong> Advanced techniques for building user interfaces in iOS apps.</li>
            </ul>
          </Box>
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