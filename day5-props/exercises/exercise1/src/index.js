import React from 'react';
import ReactDOM from 'react-dom';
import asabenehImage from '../src/img/asabeneh.png';

// Function to show formatted date
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate()

  return `${month} ${date}, ${year}`;
}

// Usercard component
const Usercard = ({user:{firstName, lastName, image}}) => {
  return (
    <div>
      <img src={image} alt={firstName} width='300'/>
      <h2>{firstName} {lastName}</h2>
    </div>
  )
}


// Techlist component
const TechList = ({techs}) => {
  const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li>)
  return techsFormatted;
}

// Header component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: {
      firstName,
      lastName
    },
    date
  }
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{firstName} {lastName}</p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// Main component
const Main = ({user, techs}) => {
  return (
    <main>
      <div className='main-wrapper'>
        <Usercard user={user}/>
        <p>Prerequisites to learn React.js</p>
        <ul>
          <TechList techs={techs}/>
        </ul>
      </div>
    </main>
  )
}

// Footer component
const Footer = ({date}) => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <p>Copyright {date.getFullYear()}</p>
      </div>
    </footer>
  )
}

// Parent, App component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 days of JavaScript',
    title: 'Getting started with React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh'
    },
    date: new Date()
  }

  const techs = ['HTML', 'CSS', 'JavaScript'];

  const user = {
    ...data.author,
    image: asabenehImage
  }

  const date = new Date();

  return (
    <div className='app'>
      <Header data={data}/>
      <Main user={user} techs={techs}/>
      <Footer date = {date}/>
    </div>
  )
}



const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);