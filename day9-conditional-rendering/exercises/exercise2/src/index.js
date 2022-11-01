import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props);
  }

  render () {
    const {title, subtitle} = this.props.data;
    return (
      <header>
        <div className='header-wrapper'>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>
            {/* The time is: {updateTime()} */}
          </p>
        </div>
      </header>
    )
  }
}


// Parent Coponent, App
class App extends React.Component {
  state = {
    loggedIn: false
  }

  render () {
    const data = {
      title: "This webpage changes color based on time",
      subtitle: "It's tomato not tomato"
    }

    return (
      <div className='app'>
        <Header data={data}/>
        {/* <Main/> */}
      </div>
    )
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);
