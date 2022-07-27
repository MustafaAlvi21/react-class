import logo1 from './logo.svg';
import './App.css';

function App() {

  function increment() {
    num1 += 1
  }
  let num1 = 9

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>NUMBER VALUE {num1}</h1>
          <img src={logo1} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;