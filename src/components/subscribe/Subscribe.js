import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className="content">
        <h2>Join Our Community Boy!!!</h2>
        <form action="https://getform.io/f/310315d6-62eb-4368-a058-e26a020931d9" method='POST'>
            <div className="form-container display-col">
                <input type="email" name='email' placeholder='Enter you r email : ' />
                <button className='btn rounded-5 p-3 px-5'>Sign Up</button>
            </div>
            <div className="form-container">
                <input type="checkbox" className='me-2 mb-3' /> <p>Yes, I agree to receive email communication with this Community</p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
