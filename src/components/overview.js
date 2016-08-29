import React from 'react'
import ReactHighcharts from 'react-highcharts'
import '../styles/overview.css'

import {Row, Col, Button} from 'react-bootstrap'

export default React.createClass({
  render () {
    return (
      <div className='panel overview'>
        <div className='overview-section top'>
          <div className='top-item menu-report'>
            <div className='title'> MENU REPORT </div>
          </div>

          <div className='top-item whats-new'>
            <div className='title'> WHAT'S NEW </div>
          </div>
        </div>

        <div className='overview-section featured-items'>
          Suppose to be some featured items
        </div>
      </div>
    )
  }
})
