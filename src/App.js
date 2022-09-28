import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RocketsPage from './Pages/RocketsPage';
import Missions from './components/Missions';
import MyProfilePage from './Pages/MyProfilePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="MyProfile" element={<MyProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
