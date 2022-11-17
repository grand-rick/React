import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';


class App extends Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props);
  }
  state = {
    data : [],
    totalWeight: 0,
    totalLifeSpan: 0,
    countries: {},
    highestCountry: {
      countryName: '',
      cats: 0
    }
  }

  componentDidMount() {
    this.fetchAPIData();
    console.log(this.state);
  }

  fetchAPIData = async () => {
    let totalWeight = 0;
    let totalLifeSpan = 0;
    let mostNumCats = 0;

    try {
      const url = 'https://api.thecatapi.com/v1/breeds';
      const response = await axios.get(url);
      const data = await response.data;

      this.setState({
        data,
      })

      for (let cat of data) {
        /* Splitting the weight of the cat into two parts, the minimum and maximum. Then it is
        adding the two together and dividing by the length of the splitWeight array. */
        const splitWeight = cat.weight.metric.split("-");
        const minWeight = +splitWeight[0];
        const maxWeight = +splitWeight[1];
  
        const averageWeight = (minWeight + maxWeight) / splitWeight.length;

        totalWeight += averageWeight;
        
        /* Splitting the life span of the cat into two parts, the minimum and maximum. Then it is
        adding the two together and dividing by the length of the splitLifeSpan array. */
        const splitLifeSpan = cat.life_span.split("-");
        const minLifeSpan = +splitLifeSpan[0];
        const maxLifeSpan = +splitLifeSpan[1];
  
        const averageLifeSpan = (minLifeSpan + maxLifeSpan) / splitLifeSpan.length;

        totalLifeSpan += averageLifeSpan;

        /* Checking if the country code is already in the countries object. If it is not, it will add
        it to the object and set the value to 1. If it is already in the object, it will add 1 to
        the value. */
        const countryCode = cat.country_code;

        const {countries} = this.state;
        const isRecorded = (countries[countryCode]) ? true : false;

        if (isRecorded === false) {
          const updatedCountries = Object.assign(countries, {[countryCode]: 1});
          this.setState({
            countries: updatedCountries
          })
        } else {
          countries[countryCode]++;
          this.setState({
            countries,
          })
          

            if (mostNumCats === 0) {
              mostNumCats = countries[countryCode];
            } else {
              mostNumCats = (countries[countryCode] >= mostNumCats) ? countries[countryCode] : mostNumCats;
            }
            this.setState({
              highestCountry: {
                countryName: [countryCode],
                cats: countries[countryCode]
              }
            })
        }
      }
    
      this.setState({
        totalWeight,
        totalLifeSpan
      })

    } catch (err) {
      console.log(err);
    }
    
  }

  render() {
    const {data, totalWeight, totalLifeSpan, highestCountry: {countryName, cats}} = this.state;
    const averageWeight = (totalWeight / data.length).toFixed(3);
    const averageLifeSpan = (totalLifeSpan / data.length).toFixed(3);
    return (
      <div className='App'>
        <h1>Cat's Lifespan</h1>
        <h2>There are {data.length} breeds of cats.</h2>
        <p>On average a cat can weigh about {averageWeight} kgs, and live for {averageLifeSpan} years.</p>
        <p>Country with the most number of cats is {countryName}, with {cats} cats in total.</p>
      </div>
    )
  }
}
const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement)