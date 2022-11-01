import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer'

// Function to show month date year
const showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
  
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }

class App extends Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render () {
        const data = {
            welcome: "Welcome to 30 days of React",
            title: "Getting Started With React",
            subtitle: "JavaScript Library",
            author: {
                firstName: "Asabeneh",
                lastName: "Yetayeh"
            },
            date: new Date()
        }

        return (
            <div className='app'>
                <Header data={data} showDate={showDate}/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default App;
