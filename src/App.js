import './App.css';
import Weather from './components/Weather/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      
      <footer>
        <a className='App-link' href="https://github.com/lhetstest/weather-react">Code is here</a>
      </footer>
    </div>
  );
}

export default App;
