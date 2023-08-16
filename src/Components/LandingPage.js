import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='landing'>
      <h1>asK fM</h1>
      <h2>Ask and get Questions</h2>
      <Link to = 'register'>Register</Link>
      <br/>
      <br/>
      <Link to = 'login'>Login</Link>
      
    </div>
  )
}

export default LandingPage