import React from 'react'
import './Home.css'
import isotipo from '../../images/Isotipo.png'

const Home = () => {
  return (
    <div className="home">
      <img src={isotipo} alt="Reintegradores isotipo"/>
      <h1>REINTEGRADORES</h1>
      <h3>Inteligencia civil</h3>
    </div>
  )
}

export default Home