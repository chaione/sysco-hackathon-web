import React from 'react'
import _ from 'lodash'
import '../styles/sidebar.css'
import { browserHistory } from 'react-router'

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
            <button className='why-not' onClick={this.onClickWhyNot}> Why not </button>
            <button className='heard'> Heard </button>
          </div>
        )
      }

      return (
        <div key={index}>
          {chat.sender}
          {chat.content}
          {actionable}
        </div>
      )
    })
  },

  render () {
    console.log()
    return (
      <div className='sidebar'>
        {this.renderChats()}
      </div>
    )
  }
})
