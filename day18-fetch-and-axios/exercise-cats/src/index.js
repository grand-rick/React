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
    countries: {}
  }

  fetchAPIData = async () => {
    try {
      const url = 'https://api.thecatapi.com/v1/breeds';
      const response = await axios.get(url);
      const data = await response.data;

      // console.log(data[2]);

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
        
        /* Splitting the life span of the cat into two parts, the minimum and maximum. Then it is
        adding the two together and dividing by the length of the splitLifeSpan array. */
        const splitLifeSpan = cat.life_span.split("-");
        const minLifeSpan = +splitLifeSpan[0];
        const maxLifeSpan = +splitLifeSpan[1];
  
        const averageLifeSpan = (minLifeSpan + maxLifeSpan) / splitLifeSpan.length;

        let countryCode = this.state.countries[cat.country_code];

        if (countryCode !== true) {
          this.setState({
            countries: {
              [countryCode]: 1
            }
          })
        } else {
          this.setState({
            countries: {
              [countryCode]: this.state.countries[countryCode] + 1
            }
          })
        }

        this.setState({
          totalWeight: this.state.totalWeight + averageWeight,
          totalLifeSpan: this.state.totalLifeSpan + averageLifeSpan,
        })
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.fetchAPIData();
    console.log(this.state);
  }

  render() {
    const {data, totalWeight, totalLifeSpan} = this.state;
    const averageWeight = (totalWeight / data.length).toFixed(3);
    const averageLifeSpan = (totalLifeSpan / data.length).toFixed(3);
    return (
      <div className='App'>
        <h1>Cat's Lifespan</h1>
        <h2>There are {data.length} breeds of cats.</h2>
        <p>On average a cat can weigh about {averageWeight} kgs, and live for {averageLifeSpan} years.</p>
      </div>
    )
  }
}
const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement)