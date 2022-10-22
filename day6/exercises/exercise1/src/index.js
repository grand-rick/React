import React from 'react';
import ReactDOM from 'react-dom';

/**
 * It checks if a number is prime, even or odd
 * @param number - The number to be checked.
 * @returns a string.
 */
const parity = (number) => {
/* Checking if the number is prime or not. */
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
        if (number === i) {
          return 'p';
        }
        else {
          break;
        }
    }
  }

  /* Checking if the number is even or odd. */
  if (number % 2 === 0) {
    return 'e';
  } else if (number % 2 !== 0){
    return 'o';
  }
}


// Numbers component
const Numbers = ({numbers}) => {
  const numbersFormatted = numbers.map(number => {
    return <button className={parity(number)}>{number}</button>
  })

  return numbersFormatted;
}

// Main component
const Main = ({numbers}) => {
  return (
    <main>
      <div className='main-wrapper'>
        <Numbers numbers={numbers}/>
      </div>
    </main>
  )
}


// Parent, App component
const App = () => {
  const numbers = [];
  const start = 0;
  const end = 31;

  for (let i = start; i <= end; i++) {
    numbers[i] = i;
  }

  return (
    <div className="app">
      <Main numbers={numbers}/>
    </div>
  )
}


const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);