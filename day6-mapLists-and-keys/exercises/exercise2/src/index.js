import React from 'react';
import ReactDOM from 'react-dom';

const HexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color;
}

// Colors component
const Colors = ({numbers}) => {
    const nums = [];
    for (let i = 0; i <= numbers; i++) {
        nums[i] = HexaColor();
    }

    const colorsFormatted = nums.map(color => {
        return <button style={{backgroundColor: color}}>{color}</button>
    })

    return (
        <div className='color-comp'>
            {colorsFormatted}
        </div>
    )
}


// Main component
const Main = ({numbers}) => {
    return (
        <main>
            <div className='main-wrapper'>
                <Colors numbers={numbers}/>
            </div>
        </main>
    )
}


// Parent, App component
const App = () => {
    const numbers = 31;
    return (
        <div>
            <Main numbers={numbers}/>
        </div>
    )
}



const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);
