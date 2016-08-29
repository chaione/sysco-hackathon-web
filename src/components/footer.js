import React from 'react'
import '../styles/footer.css'

import {FormControl} from 'react-bootstrap'

export default React.createClass({
  getInitialState () {
    return {
      value: ''
    }
  },

  handleChange (event) {
    this.setState({value: event.target.value})
  },

  onSubmit (e) {
    e.preventDefault()
    this.props.sendChat('hello world')
    this.setState({value: ''})
  },

  render () {
    return (
      <div className='footer'>
        <div className='footer-left'>
          <form onSubmit={this.onSubmit}>
            <FormControl
              type='text'
              value={this.state.value}
              placeholder="Say or type something..."
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div className='footer-right'>
          <span>10 fewer patio tables due to rain </span>
          <span className='larger'> 78° </span>
          <span className='icon'>
            <i className='fa fa-lg fa-bolt' aria-hidden='true'></i>
          </span>
        </div>
      </div>
    )
  }
})
