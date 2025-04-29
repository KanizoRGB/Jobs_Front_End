import React from 'react'
import { Carousel } from 'react-bootstrap'

function Wheels() {
  return (
    <div className='w-100' >
        <Carousel className="mt-5" >
        <Carousel.Item style={{ maxHeight: '600px' }}>
          <img
            className="d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1664298589198-b15ff5382648?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGx1bWJlcnxlbnwwfDB8MHx8fDA%3D"
            alt="First slide"
            style={{ height: '600px' }}
          />
          <Carousel.Caption>
            <h3 className='text-dark bg-light'>Explore Job Opportunities</h3>
            <p className='text-light fw-semibold bg-dark'>Discover a wide range of job listings tailored to your skills.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: '600px' }}>
          <img
            className="d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1681691911660-a40d4163ed9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5naW5lZXJ8ZW58MHwwfDB8fHww"
            alt="Second slide"
            style={{ height: '600px' }}
          />
          <Carousel.Caption>
            <h3 className='text-dark bg-light'>Advance Your Career</h3>
            <p className='text-light fw-semibold bg-dark'>Take the next step in your career with our resources.</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Wheels


