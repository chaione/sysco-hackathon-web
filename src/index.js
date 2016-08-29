import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import Reviews from './components/reviews'
import Items from './components/items'
import Fruit from './components/fruit'
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
      <Route path='reviews' component={Reviews} />
      <Route path='items' component={Items} />
      <Route path='fruit' component={Fruit} />
      <IndexRoute component={Overview} />
    </Route>
  </Router>
), document.getElementById('root'))
