import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './home';
import Contact from './contact';
import LeaveNote from './LeaveNote';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/leavenote">Leave a Note</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leavenote" element={<LeaveNote />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <p>Made by Brian Munger, 2026</p>
      </footer>
    </Router>
  );
}

export default App;