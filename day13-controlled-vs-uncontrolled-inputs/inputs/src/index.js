import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  firstName = React.createRef();
  email = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: this.firstName.current.value,
      email: this.email.current.value
    }
    console.log(data);
  }

  render () {

    return (
      <div className='app'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>First Name: </label>
          <input type='text' name='firstName' id='firstName' placeholder='First Name' ref={this.firstName}/>
          <label htmlFor='email'>Email: </label>
          <input type='email' name='email' id='email' placeholder='email' ref={this.email}/>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);