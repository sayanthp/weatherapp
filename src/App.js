import React,{Component} from 'react';
import './App.css';
import SearchBox from './SearchBox';
import {getWeatherData} from './weatherService';

class App extends Component{
  constructor(){
    super();
    this.state = {
      location : ""
    }
  }

  async componentDidMount() {
    const response = await fetch('https://geolocation-db.com/json/');
    const data = await response.json();
    this.setState({ location: data.IPv4 });
    getWeatherData(data.IPv4);
}

  render(){
    return (
      <div>
        <SearchBox location={this.state.location}/>
        
      </div>
    )
  }
}

export default App;
