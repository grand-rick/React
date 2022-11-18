import { Component } from 'react';
import './App.css';
import axios from 'axios';


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
    },
    randomCat: {}
  }

  componentDidMount() {
    this.fetchAPIData();
    this.showSingleCat();
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

  showSingleCat = async () => {
    let randomCat = {};
    try {
      const api_url = 'https://api.thecatapi.com/v1/breeds';
      const response = await axios.get(api_url);
      const data = await response.data;

      /* Getting a random cat from the data array and getting the image url from it. */
      const {
        name,
        origin,
        description,
        wikipedia_url,
        temperament,
        image: {width, height, url}
      } = data[Math.floor(Math.random() * data.length)];

      const tempObj = {
        name,
        origin,
        description,
        wikipedia_url,
        temperament,
        width,
        height,
        url,
      };

      randomCat = {
        ...tempObj
      }

    } catch (err) {
      console.log(err);
    }

    this.setState({
      randomCat
    })

    // console.log(this.state.randomCat);
    // console.log(this.state.randomCat.name);
  }

  render() {
    const {data, totalWeight, totalLifeSpan, highestCountry: {countryName, cats}, randomCat} = this.state;
    const averageWeight = (totalWeight / data.length).toFixed(3);
    const averageLifeSpan = (totalLifeSpan / data.length).toFixed(3);
    return (
      <div className='App'>
        <div className='header'>
          <h1>Cat's Lifespan</h1>
          <h2>There are {data.length} cat breeds.</h2>
          <p>On average a cat can weigh about {averageWeight} kgs, and lives {averageLifeSpan} years.</p>
          <p>The country with the most number of cats is {countryName}, with {cats} cats in total.</p>
        </div>
        <div className='main'>
          <div className='cat-card'>
            <p>This cat is known as : {randomCat.name}</p>
            <p>{randomCat.description}</p>
            <p>Origin: {randomCat.origin}</p>
            <p>Find more about {randomCat.name} at 
              <a href={randomCat.wikipedia_url}> {randomCat.name}</a>
            </p>
            <img src={randomCat.url} alt={randomCat.name}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
