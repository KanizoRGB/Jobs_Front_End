import React from 'react'

function Profile() {
  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <img src="https://th.bing.com/th/id/OIP.Zvs5IHgOO5kip7A32UwZJgHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
      alt="Tohn Doe" 
      style={{borderRadius:"50%",height:"300px"}}/>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <button className="btn btn-secondary">Edit Profile</button>
    </div>
  )
};

export default Profile;