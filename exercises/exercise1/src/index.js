// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import frontend from './img/frontend_technologies.png'

// Declaring JsX elements
const title = 'SUBSCRIBE';
const subtitle = 'Sign up with your email address to receive news and updates';
const inputFirstName = <input type="text" name="firstName" id="firstName" placeholder="First name"/>
const inputLastName = <input type="text" name="lastName" id="lastName" placeholder="Last name"/>
const inputEmailAddress = <input type="text" name="email" id="email" placeholder="email"/>
const subButton = <button>Subscribe</button>

// JSX element, user
const user = (
  <div>
    <img src={frontend} alt="frontend technologies" height="20%" width="100%"/>
  </div>
)

// JSX element, header
const header = (
  <header>
    <div className=''>
    {user}
    </div>
  </header>
)

// JSX element, main
const main = (
  <main>
    <div className='mainContent'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="inputs">
        <div>{inputFirstName}</div>
        <div>{inputLastName}</div>
        <div>{inputEmailAddress}</div>
      </div>
      <p>{subButton}</p>
    </div>
  </main>
)


// JSX element, footer
const footer = (
  <footer>
    <div className=''>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className=''>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)