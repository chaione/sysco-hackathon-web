import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import Detail from './components/detail'
import Overview from './components/overview'

import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

window._DS = {
  test: 'help'
}

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='detail' component={Detail} />
      <IndexRoute component={Overview} />
    </Route>
  </Router>
), document.getElementById('root'))
