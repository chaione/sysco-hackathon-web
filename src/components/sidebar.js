import React from 'react'
import _ from 'lodash'
import '../styles/sidebar.css'

import {Row, Col, Button} from 'react-bootstrap'

import {CHATS} from '../stores/sysco-store'

export default React.createClass({
  renderChats () {
    return _.map(CHATS, chat => {
      let actionable
      if (chat.actionable) {
        actionable = (
          <div>
            <button className='why-not'> Why not </button>
            <button className='heard'> Heard </button>
          </div>
        )
      }

      return (
        <Col xs={12}>
          {chat.sender}
          {chat.content}
          {actionable}
        </Col>
      )
    })
  },

  render () {
    console.log()
    return (
      <div className='sidebar'>
        <Row className='show-grid content-row'>
          <Col xs={12}>
            CHAT
          </Col>
          {this.renderChats()}
        </Row>
      </div>
    )
  }
})
