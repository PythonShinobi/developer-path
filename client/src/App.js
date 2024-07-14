// client/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FrontendDeveloperPage from './frontend-developer/Frontend';
import BackendDeveloperPage from './backend-developer/Backend';
import APIDeveloperPage from './api-developer/Api';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/frontend-developer' element={<FrontendDeveloperPage />}/>
        <Route path='/backend-developer' element={<BackendDeveloperPage />}/>
        <Route path='/api-developer' element={<APIDeveloperPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;