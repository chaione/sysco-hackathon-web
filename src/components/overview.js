import React from 'react'
import ReactHighcharts from 'react-highcharts'
import '../styles/overview.css'

import MenuReportPanel from '../images/menu-report-panel.png'
import WhatsNewPanel from '../images/whats-new-panel.png'
import FeaturedItemBar from '../images/featured-item-bar.png'
import {Row, Col, Button} from 'react-bootstrap'

export default React.createClass({
  render () {
    return (
      <div className='panel overview'>
        <div className='overview-section top'>
          <div className='top-item menu-report'>
            <img src={MenuReportPanel} width="100%" />
          </div>

          <div className='top-item whats-new'>
            <img src={WhatsNewPanel} width="100%" />
          </div>
        </div>

        <div className='overview-section featured-items'>
          <img src={FeaturedItemBar} width="100%" />
        </div>
      </div>
    )
  }
})
