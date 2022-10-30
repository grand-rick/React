import React from 'react';
import ReactDOM from 'react-dom';


// Function to show month date year
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
      'December',
    ]
  
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }

  const currentSeason = (time) => {
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
          'December',
        ]

        const getMonth = months[time.getMonth()].slice(0, 3);

        const allSeasons = [
            { name: 'Autumn', months: ['Sep', 'Oct', 'Nov'], startDate: 23, endDate: 21 },
            { name: 'Winter', months: ['Dec', 'Jan', 'Feb'], startDate: 404, endDate: 404 },
            { name: 'Spring', months: ['Mar', 'Apr', 'May'], startDate: 404, endDate: 404 },
            { name: 'Summer', months: ['Jun', 'Jul', 'Aug'], startDate: 404, endDate: 404 },
        ]

        let seasonName = '';
        for (let season of allSeasons) {
            const isSeason = (season.months.map(month => month === getMonth)) ? true : false;
            if (isSeason) {
                seasonName = season.name;
                break;
            }
        }

        return seasonName;
  }

// Button component
class Button extends React.Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render () {
        const {text, onClick, styles} = this.props;
        return (<button onClick={onClick} style={styles}>{text}</button>);
    }
}

// Button styles
const autumnStyles = {
    backgroundColor: '#ae5700'
}
const winterStyles = {
    backgroundColor: '#0a88d3'
}
const springStyles = {
    backgroundColor: '#02be6e'
}
const summerStyles = {
    backgroundColor: '#fdb91a'
}
// Seasons component
class Seasons extends React.Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render () {
        const {seasons} = this.props;
        const seasonsFormatted = seasons.map(season => <li key={season}>{season}</li>);
        return seasonsFormatted;
    }
}
// Header component
class Header extends React.Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render () {
        const {
            data: {
                seasons,
                welcome,
            }
        } = this.props;

        return (
            <header>
                <div className='header-wrapper'>
                    <h1>{welcome}</h1>
                    <h2>Seasons: </h2>
                    <ul>
                        <Seasons seasons={seasons}/>
                    </ul>
                </div>
            </header>
        );
    }
}

// Main component
class Main extends React.Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render() {
        const {
            seasons: {
                autumn,
                winter,
                spring,
                summer
            },
            date
        } = this.props;
        return (
            <main>
                <div className='main-wrapper'>
                    <p>The date today is {showDate(date)}</p>
                    <p>Therefore the current season is: <b>{currentSeason(date)}</b></p>
                    <Button text={"autumn"} onClick={autumn} styles={autumnStyles}/>
                    <Button text={"winter"} onClick={winter} styles={winterStyles}/>
                    <Button text={"spring"} onClick={spring} styles={springStyles}/>
                    <Button text={"summer"} onClick={summer} styles={summerStyles}/>
                </div>
            </main>
        )
    }
}

// App, Parent component
class App extends React.Component {
    state = {
        autumn: false,
        winter: false,
        spring: false,
        summer: false,
        bgColor: '#E0EAFC'
    }

    autumn = () => {
        this.setState({
            autumn: true,
            winter: false,
            spring: false,
            summer: false,
            bgColor: '#ae5700'
        })
    }

    winter = () => {
        this.setState({
            winter: true,
            spring: false,
            autumn: false,
            summer: false,
            bgColor: '#0a88d3'
        })
    }

    spring = () => {
        this.setState({
            spring: true,
            winter: false,
            autumn: false,
            summer: false,
            bgColor: '#02be6e'
        })
    }

    summer = () => {
        this.setState({
            autumn: true,
            winter: false,
            spring: false,
            summer: false,
            bgColor: '#fdb91a'
        })
    }
    render () {
        const data = {
            seasons: ['Autumn', 'Winter', 'Spring', 'Summer'],
            welcome: 'Season Change Simulator',
        }
        const seasonFunctions = {
            autumn: this.autumn,
            winter: this.winter,
            spring: this.spring,
            summer: this.summer
        }
        const bgColor = this.state.bgColor;
        return (
            <div className='app' style={{backgroundColor: bgColor, height: '100vh'}}>
                <Header data={data}/>
                <Main seasons={seasonFunctions} date={new Date()}/>
            </div>
        )
    }
}


const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);