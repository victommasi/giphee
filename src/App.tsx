import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import api from './services/api'

// import logo from './logo.svg';
import './App.css';

import Grid from '././components/Grid';

function App() {
  const [term, setTerm] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async (e: any) => {
    let newTerm = e.target.value;

    if (newTerm.length > 1) {
      const response = await api.get('/search', {
        params:
        {
          api_key: 'Ykd0y68FN92mO1Lc6jR8iCnYhtEKL6Ze',
          q: newTerm,
          limit: 12,
          offset: 0,
          rating: 'g'
        }
      });
      setTerm(newTerm);
      
      const searchedGifs = response.data.data
      searchedGifs.length > 0 ? setGifs(searchedGifs) : setGifs([]);
    }
  } 

  return (
    <div className="App">
      <main className="main">
        <div className="container">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} size="lg" color="#b0a4df" />
            <input type="text" placeholder="Find your gif" onChange={handleSearch} /> 
          </div>
          <Grid gifs={gifs}/>
        </div>
      </main>
    </div>
  );
}

export default App;
