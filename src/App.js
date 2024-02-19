import Banner from './components/Banner';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import VehicleBrands from './components/Vehicle_Details/VehicleBrands';
import VehicleSeries from './components/Vehicle_Details/VehicleSeries';
import VehicleModels from './components/Vehicle_Details/VehicleModels';
import VehicleEngines from './components/Vehicle_Details/VehicleEngines';
import VehicleChipTuning from './components/Vehicle_Details/VehicleChipTuning';

import './App.css';
import bannerImage from '../src/assets/images/banner-bg.jpg';

function App() {
  return (
    <Router>
      <main className="App">
        <div className='w-full bg-center' style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className='w-full bg-black opacity-60 text-white'>
            <Banner />
          </div>
        </div>
      </main>
      <Routes>
        <Route path="/:vehicleBrandId" element={<VehicleBrands />} />
        <Route path="/:vehicleBrandId/:vehicleSeriesId" element={<VehicleSeries />} />
        <Route path="/:vehicleBrandId/:vehicleSeriesId/:vehicleModelId" element={<VehicleModels />} />
        <Route path="/:vehicleBrandId/:vehicleSeriesId/:vehicleModelId/:vehicleEngineId" element={<VehicleEngines />} />
        <Route path="/:vehicleBrandId/:vehicleSeriesId/:vehicleModelId/:vehicleEngineId/:vehicleChipTuningId" element={<VehicleChipTuning />} />
        
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
