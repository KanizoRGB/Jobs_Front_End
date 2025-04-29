import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='bg-dark text-white py-4 d-flex flex-row justify-content-between align-items-center mt-0'>
            <div className="container ms-4 text-start">
                <p>&copy; 2025 Job Platform. All rights reserved.</p>
            </div>
            <div className='container text-center'>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#" className="text-white">Privacy Policy</a></li>
                    <li className="list-inline-item"><a href="#" className="text-white">Terms of Service</a></li>
                    <li className="list-inline-item"><a href="#" className="text-white">Contact Us</a></li>
            
                </ul>
            </div>
            <div className='container text-end'>
                <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
            </div>
            

        </footer>
    </div>
  )
}

export default Footer