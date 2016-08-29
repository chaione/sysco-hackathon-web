import React from 'react'
import '../styles/footer.css'

import {FormControl} from 'react-bootstrap'
import moment from 'moment'

export default React.createClass({
  getInitialState () {
    return {
      clicked: false
    }
  },

  clickButton () {
    this.setState({
      clicked: true
    }, () => {
      this.props.sendChat()
    })
  },

  render () {
    let {chat} = this.props

    let actionable
    if (chat.actionable.length > 0 && !this.state.clicked) {
      actionable = (
        <div>
          <button className='orange' onClick={this.clickButton}> {chat.actionable[0]} </button>
          <button className='white'> {chat.actionable[1]} </button>
        </div>
      )
    }

    return (
      <li className={'chat ' + chat.role}>
        <div className='spliter'>_</div>
        <div className='sender-name'>
          {chat.sender}
          <span className='timestamp'> {moment(chat.timestamp).fromNow()} </span>
        </div>
        {chat.content}
        <div className='action-buttons'>
          {actionable}
        </div>
      </li>
    )
  }
})
