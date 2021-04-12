import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import logo from './logo.svg';
import './App.css';

import Grid from '././components/Grid';

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="container">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} size="lg" color="#b0a4df" />
            <input type="text" placeholder="Find your gif"/> 
          </div>
          <Grid />
        </div>
      </main>
    </div>
  );
}

export default App;
