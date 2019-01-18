import React, { Component } from 'react'

class Signup extends Component {
  render () {
    return (
      <div className='row wrapper'>
        <h5 className='center'>S'enregistrer</h5>
        <form className='col s4 offset-s4 wrap auth'>
          <div className='row'>
            <div className='input-field col s12'>
              <input id='email' type='email' className='validate' />
              <label htmlFor='email'>Adresse email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input id='password' type='password' className='validate' />
              <label htmlFor='password'>Mot de passe</label>
            </div>
          </div>
          <button className='btn waves-effect waves-light' type='submit' name='action'>Valider
            <i className='material-icons right' />
          </button>
        </form>
      </div>
    )
  }
}

export default Signup
