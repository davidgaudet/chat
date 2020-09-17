import React from 'react';
import logo from './logo.svg';
import Map from './Map'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Chat Map. Message strangers around the world.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          .
        </a>
      </header>
      <Map />	  
    </div>
  );
}

export default App;
