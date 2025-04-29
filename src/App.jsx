import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import Joblisting from './components/Joblisting';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Forgot from './components/Forgot';
import Register from './components/Register';
import Publishjob from './components/Publishjob';
function App() {
  return (
    
    <div>
      <Router>

       {/* Add a Bootstrap navbar */}
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Job Platform</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/jobs">Jobs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/jobs" element={<Joblisting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/register" element={<Register />} />
          <Route path='/publish-job' element={<Publishjob />} />
        </Routes>
        <Footer />

      </Router>
    </div>
  )
}

export default App