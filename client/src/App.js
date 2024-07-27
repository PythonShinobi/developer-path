// client/src/App.js
import React, { lazy, Suspense, memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loading from './loading/loading';

const HomePage = lazy(() => import('./home/Home'));
const CareerPage = lazy(() => import('./careers/career-page'));
const AboutPage = lazy(() => import('./about/About'));
const ContactPage = lazy(() => import('./contact/Contact'));
const PageNotFound = lazy(() => import('./404-page/PageNotFound'));
const FrontendDeveloperPage = lazy(() => import('./components/frontend-developer/Frontend'));
const BackendDeveloperPage = lazy(() => import('./components/backend-developer/Backend'));
const APIDeveloperPage = lazy(() => import('./components/api-developer/Api'));
const DatabaseDeveloperPage = lazy(() => import('./components/database-developer/Database'));
const DataScientistPage = lazy(() => import('./components/data-scientist/DataScientist'));
const FullstackDeveloperPage = lazy(() => import('./components/fullstack-developer/Fullstack'));
const CloudArchitectPage = lazy(() => import('./components/cloud-architect/CloudArchitect'));
const BlockchainDeveloperPage = lazy(() => import('./components/blockchain-developer/Blockchain'));
const UXUIDesignerPage = lazy(() => import('./components/ux-ui-designer/UXUIDesignerPage'));
const CyberSecuritySpecialistPage = lazy(() => import('./components/cyber-security-specialist/CyberSecuritySpecialistPage'));
const MachineLearningPage = lazy(() => import('./components/machine-learning/MachineLearningPage'));
const PythonDeveloperPage = lazy(() => import('./components/python-developer/PythonDeveloper'));
const JavaDeveloperPage = lazy(() => import('./components/java-developer/JavaDeveloper'));
const CppDeveloperPage = lazy(() => import('./components/cpp-developer/Cpp-Developer'));
const DevOpsEngineerPage = lazy(() => import('./components/devops-engineer/DevOpsEngineer'));
const IOSDeveloperPage = lazy(() => import('./components/ios-developer/IOSDeveloper'));
const AndroidDeveloperPage = lazy(() => import('./components/android-developer/AndroidDeveloperPage'));
const GameDeveloperPage = lazy(() => import('./components/game-developer/GameDeveloperPage'));
const IoTDeveloperPage = lazy(() => import('./components/iot-developer/IoTDeveloperPage'));

const MemoizedHomePage = memo(HomePage);
const MemoizedCareerPage = memo(CareerPage);
const MemoizedAboutPage = memo(AboutPage);
const MemoizedContactPage = memo(ContactPage);
const MemoizedPageNotFound = memo(PageNotFound);
const MemoizedFrontendDeveloperPage = memo(FrontendDeveloperPage);
const MemoizedBackendDeveloperPage = memo(BackendDeveloperPage);
const MemoizedAPIDeveloperPage = memo(APIDeveloperPage);
const MemoizedDatabaseDeveloperPage = memo(DatabaseDeveloperPage);
const MemoizedDataScientistPage = memo(DataScientistPage);
const MemoizedFullstackDeveloperPage = memo(FullstackDeveloperPage);
const MemoizedCloudArchitectPage = memo(CloudArchitectPage);
const MemoizedBlockchainDeveloperPage = memo(BlockchainDeveloperPage);
const MemoizedUXUIDesignerPage = memo(UXUIDesignerPage);
const MemoizedCyberSecuritySpecialistPage = memo(CyberSecuritySpecialistPage);
const MemoizedMachineLearningPage = memo(MachineLearningPage);
const MemoizedPythonDeveloperPage = memo(PythonDeveloperPage);
const MemoizedJavaDeveloperPage = memo(JavaDeveloperPage);
const MemoizedCppDeveloperPage = memo(CppDeveloperPage);
const MemoizedDevOpsEngineerPage = memo(DevOpsEngineerPage);
const MemoizedIOSDeveloperPage = memo(IOSDeveloperPage);
const MemoizedAndroidDeveloperPage = memo(AndroidDeveloperPage);
const MemoizedGameDeveloperPage = memo(GameDeveloperPage);
const MemoizedIoTDeveloperPage = memo(IoTDeveloperPage);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<MemoizedHomePage />} />
          <Route path='/developer-paths' element={<MemoizedCareerPage />} />
          <Route path='/about' element={<MemoizedAboutPage />} />
          <Route path='/contact' element={<MemoizedContactPage />} />
          <Route path='/frontend-developer' element={<MemoizedFrontendDeveloperPage />} />
          <Route path='/backend-developer' element={<MemoizedBackendDeveloperPage />} />
          <Route path='/api-developer' element={<MemoizedAPIDeveloperPage />} />
          <Route path='/database-developer' element={<MemoizedDatabaseDeveloperPage />} />
          <Route path='/data-scientist' element={<MemoizedDataScientistPage />} />
          <Route path='/fullstack-developer' element={<MemoizedFullstackDeveloperPage />} />
          <Route path='/cloud-architect' element={<MemoizedCloudArchitectPage />} />
          <Route path='/blockchain-developer' element={<MemoizedBlockchainDeveloperPage />} />
          <Route path='/uxui-designer' element={<MemoizedUXUIDesignerPage />} />
          <Route path='/cybersecurity' element={<MemoizedCyberSecuritySpecialistPage />} />
          <Route path='/machine-learning' element={<MemoizedMachineLearningPage />} />
          <Route path='/python-developer' element={<MemoizedPythonDeveloperPage />} />
          <Route path='/java-developer' element={<MemoizedJavaDeveloperPage />} />
          <Route path='/cpp-developer' element={<MemoizedCppDeveloperPage />} />
          <Route path='/devops-engineer' element={<MemoizedDevOpsEngineerPage />} />
          <Route path='/ios-developer' element={<MemoizedIOSDeveloperPage />} />
          <Route path='/android-developer' element={<MemoizedAndroidDeveloperPage />} />
          <Route path='/game-developer' element={<MemoizedGameDeveloperPage />} />
          <Route path='/iot-developer' element={<MemoizedIoTDeveloperPage />} />
          <Route path='*' element={<MemoizedPageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default memo(App);