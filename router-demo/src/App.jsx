// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings.jsx';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav style={{
          background: '#333',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>
            Home
          </Link>
          <Link to="/profile" style={{ color: 'white', marginRight: '1rem' }}>
            Profile
          </Link>
          <Link to="/settings" style={{ color: 'white' }}>
            Settings
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;