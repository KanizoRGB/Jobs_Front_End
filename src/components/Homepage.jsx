import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import Wheels from './Wheels';

function Homepage() {
  return (
    <div className="hero bg-primary text-white text-center p-5" style={{ height: '1300px' }}>
      <h1 className="display-4">Find Your Dream Job</h1>
      <p className="lead">The best place to connect job seekers and employers.</p>
      <Link to="/login" className="btn btn-light btn-lg">Get Started</Link>
      <Wheels />
      

      

    </div>
  );
};

export default Homepage;