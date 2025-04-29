import React from 'react'

function Register() {
  return (
    <div className="container mt-5" style={{ maxWidth: '40%' }}>
        <div className='shadow p-3 bg-body rounded' style={{marginBottom: '200px'}}>
        <h2 className="text-center mb-4">Register</h2>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            
            <div className='text-center'>
                <button type="submit" class="btn btn-primary form-control">Submit</button>
            </div>
            
        </form>
        </div>
    </div>
  )
}

export default Register