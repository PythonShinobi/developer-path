// client/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FrontendDeveloperPage from './frontend-developer/Frontend';
import BackendDeveloperPage from './backend-developer/Backend';
import APIDeveloperPage from './api-developer/Api';
import DatabaseDeveloperPage from './database-developer/Database';
import DataScientistPage from './data-scientist/DataScientist';
import FullstackDeveloperPage from './Fullstack-developer/Fullstack';
import CloudArchitectPage from './cloud-architect/CloudArchitect';
import BlockchainDeveloperPage from './blockchain-developer/Blockchain';
import UXUIDesignerPage from './ux-ui-designer/UXUIDesignerPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/frontend-developer' element={<FrontendDeveloperPage />}/>
        <Route path='/backend-developer' element={<BackendDeveloperPage />}/>
        <Route path='/api-developer' element={<APIDeveloperPage />}/>
        <Route path='/database-developer' element={<DatabaseDeveloperPage />}/>
        <Route path='/data-scientist' element={<DataScientistPage />}/>
        <Route path='/fullstack-developer' element={<FullstackDeveloperPage />}/>
        <Route path='/cloud-architect' element={<CloudArchitectPage />}/>
        <Route path='/blockchain-developer' element={<BlockchainDeveloperPage />}/>        
        <Route path='/uxui-designer' element={<UXUIDesignerPage />}/>        
      </Routes>
    </BrowserRouter>
  );
};

export default App;