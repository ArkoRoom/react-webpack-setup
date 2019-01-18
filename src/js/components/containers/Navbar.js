import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Home from './Home'
import Signin from './auth/Signin'
import Signup from './auth/Signup'

class Navbar extends Component {
  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo center'>Title</Link>
          <ul id='nav-mobile' className='left hide-on-med-and-down'>
            <li><Link to='/list'>Menu 1</Link></li>
            <li><Link to='/add-picture'>Menu 2</Link></li>
          </ul>
          <ul className='right hide-on-med-and-down'>
            <li><Link to='/signin'>Se Connecter</Link></li>
            <li><Link to='/signup'>S'enregistrer</Link></li>
          </ul>
        </div>

        <Route path='/list' component={Home} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
      </nav>
    )
  }
}

export default Navbar
