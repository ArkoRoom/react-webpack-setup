import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import './styles.scss'

import App from './App'

ReactDOM.render(
  <Router>
    <div>
      <App />
    </div>
  </Router>,
  document.getElementById('app')
)
