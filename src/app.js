import React from 'react'
import './app.css'

import Sidebar from './components/sidebar'
import Footer from './components/footer'
import { browserHistory } from 'react-router'

import {CHATS} from './stores/sysco-store'

import {Grid, Row, Col} from 'react-bootstrap'

export default React.createClass({
  getInitialState () {
    return {
      name: 'wang bao qiang',
      age: '16',
      chats: CHATS
    }
  },

  sendRealChat (text) {
    this.state.chats.splice(this.state.chats.length, 0, {
      sender: 'Me (Sophie)',
      role: 'client',
      timestamp: new Date(),
      content: text,
      actionable: []
    })

    this.setState({chats: this.state.chats})
  },

  sendChat (text) {
    if (this.state.chats.length === 1) {
      this.state.chats.splice(this.state.chats.length, 0, {
        sender: 'Me (Sophie)',
        role: 'client',
        timestamp: new Date(),
        content: 'Why not?',
        actionable: []
      })
      this.setState({chats: this.state.chats}, () => {
        setTimeout(() => {
          this.state.chats.splice(this.state.chats.length, 0, {
            sender: 'Assistant',
            role: 'bot',
            timestamp: new Date(),
            content: 'Take a look at these Yelp reviews...they may give some insight',
            actionable: ['Any ideas', 'Next']
          })

          this.setState({chats: this.state.chats}, () => {
            browserHistory.push('/detail')
          })
        }, 3000)
      })
    } else {
      this.state.chats.splice(this.state.chats.length, 0, {
        sender: 'Me (Sophie)',
        role: 'client',
        timestamp: new Date(),
        content: 'Any ideas',
        actionable: []
      })
      this.setState({chats: this.state.chats}, () => {
        setTimeout(() => {
          this.state.chats.splice(this.state.chats.length, 0, {
            sender: 'Assistant',
            role: 'bot',
            timestamp: new Date(),
            content: 'Take a look at some ingredient options...tap an ingredient and view more details and recipes.',
            actionable: false
          })

          this.setState({chats: this.state.chats}, () => {

            this.state.chats.splice(this.state.chats.length, 0, {
              sender: 'Tom (Sysco MA)',
              role: 'sysco',
              timestamp: new Date(),
              content: 'Hey Sophie, you may want to try some lamb-based meatball recipes. We’ve seen some interesting market-ing stats in your region.',
              actionable: false
            })

            this.setState({chats: this.state.chats})

          })
        }, 3000)
      })
    }
  },

  render () {
    return (
      <div className='app'>
        <div className='app-header'>
          <div>YES, CHEF</div>
        </div>

        <Row className='show-grid content-row'>
          <Col xs={3} className='content-col'>
            <Sidebar chats={this.state.chats} sendChat={this.sendChat} />
          </Col>
          <Col xs={9} className='content-col'>
            {this.props.children}
          </Col>

        </Row>

        <Footer sendRealChat={this.sendRealChat} />
      </div>
    )
  }
})
