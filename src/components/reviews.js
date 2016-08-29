import React from 'react'
import '../styles/reviews.css'
import {REVIEWS} from '../stores/sysco-store'

import YelpReviewsPanel from '../images/yelp-reviews-panel.png'

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
      <div className='panel reviews'>
        <div className='detail-section top'>
          <img src={YelpReviewsPanel} width="50%" />
        </div>
      </div>
    )
  }
})
