import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RocketsPage from './Pages/RocketsPage';
// import MissionsPage from './Pages/MissionsPage';
import MyProfilePage from './Pages/MyProfilePage';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        {/* <Route path="Missions" element={<MissionsPage />} /> */}
        <Route path="MyProfile" element={<MyProfilePage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
