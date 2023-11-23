import FistLvlprivateRoute from '../src/component/FistLvlprivateRoute.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from '../src/component/AboutUs.jsx';
import Brand from '../src/Product/Brand.jsx';
import Products from '../src/Product/Products.jsx';
import NewBetch from '../src/Betch/NewBetch.jsx';
import VerifyBetch from '../src/Betch/VerifyBetch.jsx';
import ConfigurBetch from '../src/Betch/ConfigurBetch.jsx';
import StartBech from '../src/Betch/StartBech.jsx';
import PushBetch from '../src/Betch/PushBetch.jsx';
import CancleBetch from '../src/Betch/CancleBetch.jsx';
import CloseBetch from '../src/Betch/CloseBetch.jsx';
import ViewBetch from '../src/Betch/ViewBetch.jsx';
import OfflinePrinting from '../src/Betch/OfflinePrinting.jsx';
import BetchRelationShip from '../src/Reports/BetchRelationShip.jsx';
import XMLUpload from '../src/Reports/XMLUpload.jsx';
import BetchReport from '../src/Reports/BetchReport.jsx';
import ProductReport from '../src/Reports/ProductReport.jsx';
import AuditTryal from '../src/Reports/AuditTryal.jsx';
import DiagnosisReport from '../src/Reports/DiagnosisReport.jsx';
import PCMapReport from '../src/Reports/PCMapReport.jsx';
import ProductionReport from '../src/Reports/ProductionReport.jsx';
import CompnyDetails from '../src/SettingandUtility/CompnyDetails.jsx';
import Backup from '../src/SettingandUtility/Backup.jsx';
import Restore from '../src/SettingandUtility/Restore.jsx';
import User from '../src/SettingandUtility/User.jsx';
import AdminPassword from '../src/SettingandUtility/AdminPassword.jsx';
import LineHardwareConfig from '../src/SettingandUtility/LineHardwareConfig.jsx';
import LabelLayoutPrinting from '../src/SettingandUtility/LabelLayoutPrinting.jsx';
import UseracessManagement from '../src/SettingandUtility/UseracessManagement.jsx';


import './App.css';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <FistLvlprivateRoute><AboutUs /></FistLvlprivateRoute>}></Route>
            <Route path="/Product/Brand" element={ <FistLvlprivateRoute><Brand /></FistLvlprivateRoute>}></Route>
            <Route path="/Product/Products" element={ <FistLvlprivateRoute><Products /></FistLvlprivateRoute>}></Route>
            <Route path="/Betch/NewBetch" element={ <FistLvlprivateRoute><NewBetch /></FistLvlprivateRoute>}></Route>
            <Route path="/Betch/VerifyBetch" element={ <FistLvlprivateRoute><VerifyBetch /></FistLvlprivateRoute>}></Route>
            <Route path="/Betch/ConfigurBetch" element={ <FistLvlprivateRoute><ConfigurBetch /></FistLvlprivateRoute>}></Route>
            <Route path="/Betch/StartBech" element={ <FistLvlprivateRoute><StartBech /></FistLvlprivateRoute>}></Route>
            <Route path="/Betch/PushBetch" element={ <FistLvlprivateRoute><PushBetch /></FistLvlprivateRoute>}></Route>
            <Route path="/Betch/CloseBetch" element={ <FistLvlprivateRoute><CloseBetch /></FistLvlprivateRoute>}></Route>
            <Route path="/Betch/CancleBetch" element={ <FistLvlprivateRoute><CancleBetch /></FistLvlprivateRoute>}></Route>
            <Route path="/Betch/ViewBetch" element={ <FistLvlprivateRoute><ViewBetch /></FistLvlprivateRoute>}></Route>
            <Route path="/Betch/OfflinePrinting" element={ <FistLvlprivateRoute><OfflinePrinting /></FistLvlprivateRoute>}></Route>
            <Route path="/Reports/BetchRelationShip" element={ <FistLvlprivateRoute><BetchRelationShip /></FistLvlprivateRoute>}></Route>
            <Route path="/Reports/XMLUpload" element={ <FistLvlprivateRoute><XMLUpload /></FistLvlprivateRoute>}></Route>
            <Route path="/Reports/BetchReport" element={ <FistLvlprivateRoute><BetchReport /></FistLvlprivateRoute>}></Route>
            <Route path="/Reports/ProductReport" element={ <FistLvlprivateRoute><ProductReport /></FistLvlprivateRoute>}></Route>
            <Route path="/Reports/AuditTryal" element={ <FistLvlprivateRoute><AuditTryal /></FistLvlprivateRoute>}></Route>
            <Route path="/Reports/PCMapReport" element={ <FistLvlprivateRoute><PCMapReport /></FistLvlprivateRoute>}></Route>
            <Route path="/Reports/DiagnosisReport" element={ <FistLvlprivateRoute><DiagnosisReport /></FistLvlprivateRoute>}></Route>
            <Route path="/Reports/ProductionReport" element={ <FistLvlprivateRoute><ProductionReport /></FistLvlprivateRoute>}></Route>
            <Route path="/SettingandUtility/CompnyDetails" element={ <FistLvlprivateRoute><CompnyDetails /></FistLvlprivateRoute>}></Route>
            <Route path="/SettingandUtility/Backup" element={ <FistLvlprivateRoute><Backup /></FistLvlprivateRoute>}></Route>
            <Route path="/SettingandUtility/Restore" element={ <FistLvlprivateRoute><Restore /></FistLvlprivateRoute>}></Route>
            <Route path="/SettingandUtility/User" element={ <FistLvlprivateRoute><User /></FistLvlprivateRoute>}></Route>
            <Route path="/SettingandUtility/AdminPassword" element={ <FistLvlprivateRoute><AdminPassword /></FistLvlprivateRoute>}></Route>
            <Route path="/SettingandUtility/LineHardwareConfig" element={ <FistLvlprivateRoute><LineHardwareConfig /></FistLvlprivateRoute>}></Route>
            <Route path="/SettingandUtility/LabelLayoutPrinting" element={ <FistLvlprivateRoute><LabelLayoutPrinting /></FistLvlprivateRoute>}></Route>
            <Route path="/SettingandUtility/UseracessManagement" element={ <FistLvlprivateRoute><UseracessManagement /></FistLvlprivateRoute>}></Route>
            

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
