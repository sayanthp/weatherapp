import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.info.desc} <code>React</code>
        </p>
      </header>
    </div>
  );
}

export default App;
