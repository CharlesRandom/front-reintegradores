import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import isotipo from '../../images/Isotipo.png'
import btnLogin from '../../images/BotonLogin.png'
import btnSignup from '../../images/BotonSignup.png'
import Navbar from '../general/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="auth">
        <Link to='/login'><img src={btnLogin} alt="Login"/></Link>
        {/* <a href="/login"><img src={btnLogin} alt="Login"/></a> */}
        <Link to='/signup'><img src={btnSignup} alt="Signup"/></Link>
      </div>
      <div className="home">
        <img src={isotipo} alt="Reintegradores isotipo"/>
        <h1>REINTEGRADORES</h1>
        <h3>Inteligencia civil</h3>
    </div>
    </div>
  )
}

export default Home