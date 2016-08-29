import React from 'react'
import '../styles/detail.css'
import {REVIEWS} from '../stores/sysco-store'

export default React.createClass({
  renderReviews () {
    return _.map(REVIEWS, (review, index) => {
      return (
        <div key={index}>
          {review.ratings}
          {review.timestamp}
          {review.review}
        </div>
      )
    })
  },

  render () {
    return (
      <div className='panel detail'>
        <div className='detail-section top'>
          <div className='top-items reviews'>
            <div className='title'> Yelp Reviews for "metaballs" </div>
            {this.renderReviews()}
          </div>

          <div className='top-items menu-enhancements'>
            <div className='title'> MENU ENHANCEMENTS </div>
            <div>
              Suppose to be a menu pic
              And some desciptions
            </div>
            <div className='meat-types'>
              <div className='meat-type'>Beef</div>
              <div className='meat-type'>Lamb</div>
              <div className='meat-type'>Pork</div>
            </div>

            Suppose to be menu enhancements
          </div>
        </div>

        <div className='detail-section menu-items'>
          Suppose to be some menu pics
        </div>
      </div>
    )
  }
})
