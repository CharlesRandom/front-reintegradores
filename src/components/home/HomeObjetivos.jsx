import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import isotipo from '../../images/Isotipo.png'
import btnLogin from '../../images/BotonLogin.png'
import btnSignup from '../../images/BotonSignup.png'
import Navbar from '../general/Navbar';

const HomeObjetivos = () => {
  return (
    <div>
      <Navbar />
      <div className="auth">
        <Link to='/login'><img src={btnLogin} alt="Login"/></Link>
        <Link to='/signup'><img src={btnSignup} alt="Signup"/></Link>
      </div>
      <div className="home">
        <h1>OBJETIVOS DE DESARROLLO SOSTENIBLE</h1>
        <h5>
          Reintegradores acompaña a las organizaciones durante todo el proceso de 
          GESTIÓN E IMPLEMENTACIÓN DE SUS INICIATIVAS garantizando el éxito de SUS OBJETIVOS
        </h5>
        <img src={isotipo} alt="Reintegradores isotipo"/>
    </div>
    </div>
  )
}

export default HomeObjetivos