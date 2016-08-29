import React from 'react'
import _ from 'lodash'
import '../styles/sidebar.css'
import { browserHistory } from 'react-router'
import moment from 'moment'

import {Row, Col, Button} from 'react-bootstrap'

import {CHATS} from '../stores/sysco-store'

export default React.createClass({
  getInitialState () {
    return {
      chats: CHATS
    }
  },

  onClickWhyNot () {
    browserHistory.push('/detail')
  },

  renderChats () {
    return _.map(this.state.chats, (chat, index) => {
      let actionable
      if (chat.actionable) {
        actionable = (
          <div>
            <button className='orange' onClick={this.onClickWhyNot}> Why not </button>
            <button className='white'> Heard </button>
          </div>
        )
      }

      return (
        <li className={'chat ' + chat.role} key={index}>
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
    })
  },

  render () {
    return (
      <div className='sidebar'>
        <div className='title'> CHAT </div>
        <ul className='chats'>
          {this.renderChats()}
        </ul>
      </div>
    )
  }
})
