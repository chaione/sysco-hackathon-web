import React from 'react'
import '../styles/reviews.css'

import Cart from '../images/cart-lamb-tomato-panel.png'

export default React.createClass({
  render () {
    return (
      <div className='panel fruit'>
        <div className='detail-section top'>
          <img src={Cart} width="50%" style={{float: "right"}}/>
        </div>
      </div>
    )
  }
})
