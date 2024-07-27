// src/components/Loading.js

import React from 'react';

import './loading.css'; // Import the CSS file for styling
import Navbar from '../navbar/Navbar';

const Loading = () => {
  return (
    <div className="loading-container">
      <Navbar />
      <img 
        src="https://res.cloudinary.com/ddtded6wc/image/upload/v1722068338/loading-image-removebg-preview_sxup82.png" 
        alt="Loading" 
        className="loading-image" 
      />
      <p className="loading-text">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
