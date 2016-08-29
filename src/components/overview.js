import React from 'react'
import ReactHighcharts from 'react-highcharts'
import '../styles/overview.css'

import {Row, Col, Button} from 'react-bootstrap'

export default React.createClass({
  render () {
    return (
      <div className='panel overview'>
        <div className='overview-section sales-chart'>
          Suppose to be a chart
        </div>
        <div className='overview-section inventories'> Menus </div>
        <div className='overview-section menu-items'> Menu Items </div>
      </div>
    )
  }
})
