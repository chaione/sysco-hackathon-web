import React from 'react'
import _ from 'lodash'
import '../styles/sidebar.css'

import {Row, Col, Button} from 'react-bootstrap'
import Chat from './chat'

import {CHATS} from '../stores/sysco-store'

export default React.createClass({
  renderChats () {
    return _.map(this.props.chats, (chat, index) => {
      return (
        <Chat chat={chat} key={index} sendChat={this.props.sendChat} />
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
