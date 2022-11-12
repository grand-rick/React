import React , {Component} from 'react';

class Home extends Component {
    /* Setting the state of the component. */
    state = {
        firstName : 'Patrick',
        lastName : 'Murimi',
    }

    render () {
        return (
            <div>
                <h1>Hello, my name is {this.state.firstName} {this.state.lastName}</h1>
            </div>
        )
    }
}

export default Home;

