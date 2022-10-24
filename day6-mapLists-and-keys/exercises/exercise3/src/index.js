import React from 'react';
import ReactDOM from 'react-dom';
import yellow from'../src/images/yellow.jpg';


// Width component
const width = (num) => {
  const total = 7693165599;
  const percentage = ((num / total) * 100);


  return percentage.toPrecision(3);
}


// Countries component
const Countries = ({data}) => {

  const populationFormatted = data.map(pop => {
    console.log(width(pop.population));
    return (
      <div key={pop.country} className='countries'>
        <span className='span1'>{pop.country}</span>
        <img src={yellow} alt="Yellow" className='pop-width' width={width(pop.population)}/>
        <span className='span3'>{pop.population}</span>
      </div>)
  })

  return populationFormatted;
}


// Header component
const Header = ({title, subtitle}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </header>
  )
}

// Main component
const Main = ({data}) => {
  return (
    <main>
      <div className='main-wrapper'>
        <Countries data={data}/>
      </div>
    </main>
  )
}



const App = () => {
  const title = '30 Days of React';
  const subtitle = 'World population';

  const data = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]

  return (
    <div>
      <Header title={title} subtitle={subtitle}/>
      <Main data={data}/>
    </div>
  )
}


const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);