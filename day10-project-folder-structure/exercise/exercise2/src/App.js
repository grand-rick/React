import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import User from './components/user/user';
import asabenehImage from './assets/images/asabeneh.png';


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

    state = {
        bgColor: '#61dbfb',
        fontColor: '#000'
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

        const user = {
            ...data.author,
            image: asabenehImage
        }

        const toggleDarkMode = () => {
            const bgColor = (this.state.bgColor === '#61dbfb') ? '#0F2027' : '#61dbfb';
            const fontColor = (this.state.fontColor === '#000') ? '#fff' : '#000';
            this.setState({
                bgColor,
                fontColor
            })
        }

        return (
            <div className='app' style={{backgroundColor: this.state.bgColor, color: this.state.fontColor}}>
                <Header data={data} showDate={showDate}/>
                <Main toggleDarkMode={toggleDarkMode}/>
                <User user={user}/>
                <Footer/>
            </div>
        )
    }
}

export default App;
