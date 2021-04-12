import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="container">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} size="lg" color="#b0a4df" />
            <input type="text" placeholder="Find your gif"/> 
          </div>
          <ul className="grid">
            <li className="card">
              <img src="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
            </li>
            <li className="card">
              <img src="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
            </li>
            <li className="card">
              <img src="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
            </li>
            <li className="card">
              <img src="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
