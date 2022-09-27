import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="navbar-logo">logo</h2>
        <ul className="navbar-elements">
          <li className="navbar-element"><Link className="navtext" to="/">Rockets</Link></li>
          <li className="navbar-element"><Link className="navtext" to="/">Missions</Link></li>
          <li className="navbar-element"><Link className="navtext" to="/">My Profile</Link></li>
        </ul>
      </nav>

      {/* <Routes>
        <Route
          path="/"
          element={<Rockets />}
        />
        <Route path="/categories" element={<Missions />} />
        <Route path="/categories" element={<Profile />} />
      </Routes> */}
    </>
  );
}

export default App;
