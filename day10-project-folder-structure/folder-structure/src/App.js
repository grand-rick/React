import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import App from'.components/header/'

class App extends Component {
    render () {
        return (
            <div className='app'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default App;
