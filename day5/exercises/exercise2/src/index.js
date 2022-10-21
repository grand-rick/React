import React from 'react';
import ReactDOM from 'react-dom';
import asabenehImage from './img/asabeneh.png';


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
    'December'
  ]

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();

  return `${month} ${date}, ${year}`;
}

// Usercard component
const Usercard = ({user:{firstName, lastName, title, country, image}}) => {
  return (
    <div className='user-card'>
      <img src={image} alt={firstName}/>
      <h2>
        {firstName} {lastName}
      </h2>
      <h3>
        {title}, {country}
      </h3>
    </div>
  )
}

// TechList component
const TechList = ({techs}) => {
  const techsFormatted = techs.map(tech => <button>{tech}</button>);
  return techsFormatted;
}

// Header component
const Header = ({user}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <Usercard user={user}/>
      </div>
    </header>
  )
}

// Main component
const Main = ({techs}) => {
  return (
    <main>
      <div className='main-wrapper'>
        <p>SKILLS</p>
        <TechList techs={techs}/>
      </div>
    </main>
  )
}

// Footer component
const Footer = ({date}) => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <p>Joined {showDate(date)}</p>
      </div>
    </footer>
  )
}

// Parent Component, App component
const App = () => {

  const data = {
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh'
    },
    title: 'Senior Developer',
    country: 'Finland',
    techStack: ['HTML', 'CSS', 'Sass', 'Js', 'React', 'React', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']

  }

  const user = {
    ...data.author,
    ...data,
    image: asabenehImage
  }

  const date = new Date();

  const techs = data.techStack;

  return (
    <div className='app'>
      <Header user={user}/>
      <Main techs={techs}/>
      <Footer date={date}/>
    </div>
  )
}


// Getting the root element
const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);