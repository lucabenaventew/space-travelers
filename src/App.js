import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import RocketsPage from './Pages/RocketsPage';
import Missions from './components/Missions';
import MyProfilePage from './Pages/MyProfilePage';
import { fetchMissions } from './Redux/Missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
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
