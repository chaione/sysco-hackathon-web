import React from 'react'
import ReactHighcharts from 'react-highcharts'
import '../styles/footer.css'

import {Row, Col, Button} from 'react-bootstrap'

export default React.createClass({
  render () {
    return (
      <div className='footer'>
        <div className='footer-left'> Left Side </div>
        <div className='footer-right'> Right Side </div>
      </div>
    )
  }
})

