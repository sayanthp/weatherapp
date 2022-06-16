import React,{Component} from 'react'
import './App.css';
import SearchBox from './SearchBox';

class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <SearchBox />
        
      </div>
    )
  }
}

export default App;
