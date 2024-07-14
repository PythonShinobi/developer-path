// client/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FrontendDeveloperPage from './frontend-developer/Frontend';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/frontend-developer' element={<FrontendDeveloperPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;