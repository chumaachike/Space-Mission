import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Rockets from './Rockets';
import Mission from './Mission';
import Profile from './profile';
import './app.css';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="horizontal-divider" />
        <div className="semi-container">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
