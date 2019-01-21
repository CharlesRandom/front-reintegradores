import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import btnLogin from '../../images/BotonLogin.png'
import btnSignup from '../../images/BotonSignup.png'
import Navbar from '../general/Navbar';

const HomeVideo = () => {
  return (
    <div>
      <Navbar />
      <div className="auth">
        <Link to='/login'><img src={btnLogin} alt="Login"/></Link>
        {/* <a href="/login"><img src={btnLogin} alt="Login"/></a> */}
        <Link to='/signup'><img src={btnSignup} alt="Signup"/></Link>
      </div>
      <div className="home">
        <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default HomeVideo