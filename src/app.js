import React from 'react'
import './app.css'

import Sidebar from './components/sidebar'
import Footer from './components/footer'

import {Grid, Row, Col} from 'react-bootstrap'

export default React.createClass({
  getInitialState () {
    return {
      name: 'wang bao qiang',
      age: '16'
    }
  },

  render () {
    return (
      <div className='app'>
        <Row className='show-grid content-row'>
          <Col xs={3} className='content-col'>
            <Sidebar />
          </Col>
          <Col xs={9} className='content-col'>
            {this.props.children}
          </Col>

        </Row>

        <Footer />
      </div>
    )
  }
})
