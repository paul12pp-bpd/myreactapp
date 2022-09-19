import logo from './logo.svg';
import './App.css';

const env_var = process.env['REACT_APP_PRUEBA_ENV'] || 'empty';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Paul webhook!
        </a>
        <a className="App-link" href="#">{env_var}</a>
      </header>
    </div>
  );
}

export default App;
