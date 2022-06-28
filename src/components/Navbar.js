// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "./css/Navbar.css"


export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <>

        <div className="navbar">
            <nav className='navbarNav'>
                <h1 className="navbar-heading"><a href='/'>NewNew News</a></h1>
                <ul className="navbar-links">
                    <li className="navbar-li"><a href='/'>Home</a></li>
                    <li className="navbar-li"><a href='/'>Featured</a></li>
                    <li className="navbar-li"><a href='/'>About Us</a></li>
                    <li className="navbar-li"><a href='/'>Contact Us</a></li>
                </ul>
            </nav>
        </div>

      </>
    )
  }
}

export default Navbar