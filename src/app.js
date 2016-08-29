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
    const delay = 30

    if (this.state.chats.length === 1) {
      this.state.chats.splice(this.state.chats.length, 0, {
        sender: 'Me (Sophie)',
        role: 'client',
        timestamp: new Date(),
        content: 'Show me',
        actionable: []
      })

      this.state.chats.splice(this.state.chats.length, 0, {
        sender: 'Assistant',
        role: 'bot',
        timestamp: new Date(),
        content: 'Yes, Chef! ...',
        actionable: []
      })

      this.setState({chats: this.state.chats}, () => {
        setTimeout(() => {
          this.state.chats.splice(this.state.chats.length, 0, {
            sender: 'Assistant',
            role: 'bot',
            timestamp: new Date(),
            content: 'Take a look at these Yelp reviews... they may give some insight',
            actionable: ['Got any ideas', 'Heard']
          })

          this.setState({chats: this.state.chats}, () => {
            browserHistory.push('/detail')
          })
        }, delay)
      })
    } else if (this.state.chats.length === 4) {
      this.state.chats.splice(this.state.chats.length, 0, {
        sender: 'Me (Sophie)',
        role: 'client',
        timestamp: new Date(),
        content: 'Got any ideas?',
        actionable: []
      })

      this.state.chats.splice(this.state.chats.length, 0, {
        sender: 'Assistant',
        role: 'bot',
        timestamp: new Date(),
        content: 'Yes, Chef! ...',
        actionable: []
      })

      this.setState({chats: this.state.chats}, () => {
        setTimeout(() => {
          this.state.chats.splice(this.state.chats.length, 0, {
            sender: 'Assistant',
            role: 'bot',
            timestamp: new Date(),
            content: "Chef, lamb has been added to the cart...Now that we’ve got that settled, let’s look at our inventory",
            actionable: ['Quickly, plz', 'Heard']
          })
          this.setState({chats: this.state.chats})
        }, delay)
      })
    } else {
      this.state.chats.splice(this.state.chats.length, 0, {
        sender: 'Me (Sophie)',
        role: 'client',
        timestamp: new Date(),
        content: 'Quickly, plz',
        actionable: []
      })

      this.state.chats.splice(this.state.chats.length, 0, {
        sender: 'Assistant',
        role: 'bot',
        timestamp: new Date(),
        content: 'Yes, Chef! ...',
        actionable: []
      })

      this.setState({chats: this.state.chats}, () => {
        setTimeout(() => {
          this.state.chats.splice(this.state.chats.length, 0, {
            sender: 'Assistant',
            role: 'bot',
            timestamp: new Date(),
            content: `Ok Chef, time to get your order in.Based on your inventory levels and your sales,
              we have the following recommendations to your next
              order:Par levels for tomatoes are a bit low. We recommend adding one crate:Heirloom tomato
              "Costoluto Genovese" are known for adding a very deep flavor profile to sauces. You could add
              $1.5 to the plate price with only $0.30 to plate cost. Prep is the same, no line pan adjustments.With the
              lamb substitution, we think you can lower you par level on beef by 30 lbs.`,
            actionable: ['Organic Roma', 'Hierloom']
          })

          this.setState({chats: this.state.chats})
        }, delay)
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
