import React from 'react'
import '../styles/reviews.css'

import Items from '../images/what-if-items-panel.png'
import Cart from '../images/cart-lamb-only-panel.png'

export default React.createClass({
  render () {
    return (
      <div className='panel reviews'>
        <div className='detail-section top'>
          <img src={Items} width="50%" />
          <img src={Cart} width="50%" />
        </div>
      </div>
    )
  }
})
