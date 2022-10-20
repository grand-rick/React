import React from 'react'
import ReactDOM from 'react-dom'


const HexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color;
}

const Main = () => (
  <main className='main-wrapper'>
    <div style={{backgroundColor: HexaColor()}}><HexaColor/></div>
    <div style={{backgroundColor: HexaColor()}}><HexaColor/></div>
    <div style={{backgroundColor: HexaColor()}}><HexaColor/></div>
    <div style={{backgroundColor: HexaColor()}}><HexaColor/></div>
  </main>
)


const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<Main/>, rootElement)