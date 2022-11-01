import React, { Component } from 'react';

 class Main  extends Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render () {
        const { toggleDarkMode } = this.props;
        return (
            <main>
                <div className='header-wrapper'>
                    <button onClick={toggleDarkMode}>Toggle Dark / Light Mode</button>
                </div>
            </main>
        )
    }
 }

 export default Main;