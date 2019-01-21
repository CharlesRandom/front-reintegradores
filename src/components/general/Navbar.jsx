import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to='/'><p>Inicio</p></Link> |
        <Link to='/solutions'><p>Nosotros</p></Link> |
        <Link to='/about'><p>Objetivos</p></Link> |
        <Link to='/products'><p>Newsletter</p></Link> |
        <Link to='/subsidiaries'><p>Registro</p></Link> |
        <Link to='/where'><p>Administración</p></Link>
      </div>
    )
  }
}