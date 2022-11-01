// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    right: '',
    bottom: ''
  }
  // triggered whenever the mouse moves
  handleMouseEnter = (e) => {
    const xValue = Math.random() * e.clientX;
    const yValue = Math.random() * e.clientY;

    this.setState({
      right: xValue,
      bottom: yValue
    })
  }

  render() {
    const buttonStyles = {
      position: 'absolute',
      bottom: this.state.bottom,
      right: this.state.right,
    }
    return (
        <button onMouseEnter={this.handleMouseEnter} style={buttonStyles}>Welcome to 30 days of react</button>
    )
  }
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)