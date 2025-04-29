import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Loginpage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here, such as sending a request to your backend API
        console.log('Email:', email);
        console.log('Password:', password);
    };
    
  return (
    <div className="container mt-5">
      <div className="row justify-content-center" style={{ marginBottom: '200px' }}>
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            <div className="text-center mt-3">
              <Link to="/register">Don't have an account?</Link>
            </div>
            <div className="text-center mt-3">
              <Link to="/forgot-password">Forgot password?</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage