// client/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './home/Home';
import AboutPage from './about/About';
import ContactPage from './contact/Contact';
import PageNotFound from './404-page/PageNotFound';
import FrontendDeveloperPage from './components/frontend-developer/Frontend';
import BackendDeveloperPage from './components/backend-developer/Backend';
import APIDeveloperPage from './components/api-developer/Api';
import DatabaseDeveloperPage from './components/database-developer/Database';
import DataScientistPage from './components/data-scientist/DataScientist';
import FullstackDeveloperPage from './components/fullstack-developer/Fullstack';
import CloudArchitectPage from './components/cloud-architect/CloudArchitect';
import BlockchainDeveloperPage from './components/blockchain-developer/Blockchain';
import UXUIDesignerPage from './components/ux-ui-designer/UXUIDesignerPage';
import CyberSecuritySpecialistPage from './components/cyber-security-specialist/CyberSecuritySpecialistPage';
import MachineLearningPage from './components/machine-learning/MachineLearningPage';
import PythonDeveloperPage from './components/python-developer/PythonDeveloper';
import JavaDeveloperPage from './components/java-developer/JavaDeveloper';
import CppDeveloperPage from './components/cpp-developer/Cpp-Developer';
import DevOpsEngineerPage from './components/devops-engineer/DevOpsEngineer';
import IOSDeveloperPage from './components/ios-developer/IOSDeveloper';
import AndroidDeveloperPage from './components/android-developer/AndroidDeveloperPage';
import GameDeveloperPage from './components/game-developer/GameDeveloperPage';
import IoTDeveloperPage from './components/iot-developer/IoTDeveloperPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/frontend-developer' element={<FrontendDeveloperPage />}/>
        <Route path='/backend-developer' element={<BackendDeveloperPage />}/>
        <Route path='/api-developer' element={<APIDeveloperPage />}/>
        <Route path='/database-developer' element={<DatabaseDeveloperPage />}/>
        <Route path='/data-scientist' element={<DataScientistPage />}/>
        <Route path='/fullstack-developer' element={<FullstackDeveloperPage />}/>
        <Route path='/cloud-architect' element={<CloudArchitectPage />}/>
        <Route path='/blockchain-developer' element={<BlockchainDeveloperPage />}/>        
        <Route path='/uxui-designer' element={<UXUIDesignerPage />}/>        
        <Route path='/cybersecurity' element={<CyberSecuritySpecialistPage />}/>        
        <Route path='/machine-learning' element={<MachineLearningPage />}/>        
        <Route path='/python-developer' element={<PythonDeveloperPage />}/>        
        <Route path='/java-developer' element={<JavaDeveloperPage />}/>        
        <Route path='/cpp-developer' element={<CppDeveloperPage />}/>                     
        <Route path='/devops-engineer' element={<DevOpsEngineerPage />}/>        
        <Route path='/ios-developer' element={<IOSDeveloperPage />}/>        
        <Route path='/android-developer' element={<AndroidDeveloperPage />}/>        
        <Route path='/game-developer' element={<GameDeveloperPage />}/>        
        <Route path='/iot-developer' element={<IoTDeveloperPage />}/>                    
        <Route path='*' element={<PageNotFound />}/>        
      </Routes>
    </BrowserRouter>
  );
};

export default App;