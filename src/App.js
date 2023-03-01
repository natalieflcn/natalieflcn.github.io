import logo from './Natalie.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Natalie Falcon and I'm going to master React! 
        </p>
        <a 
          className="App-link"
          href="https://github.com/natalieflcn"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github Link 
        </a>
      </header>
    </div>
  );
}

export default App;
