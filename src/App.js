import React from 'react';
import logo from './logo.svg';
import './styles/tailwind.css';

function App() {
  return (
    <div className="App overflow-hidden text-center">
      <header className="App-header font-black bg-reactbg min-h-screen text-center flex flex-col justify-center items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="text-white">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-white"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
