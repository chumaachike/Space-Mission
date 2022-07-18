import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Rockets from './Rockets';
import Mission from './Mission';
import Profile from './Profile';
import './app.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="horizontal-divider" />
      <div className="contianer">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
