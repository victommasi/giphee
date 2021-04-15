/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import api from './services/api'

// import logo from './logo.svg';
import './App.css';

import Grid from '././components/Grid';

const App = () => {
  const scrollObserver = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const [gifs, setGifs] = useState<any>([]);
  const [term, setTerm] = useState('');
  const [offset, setOffset] = useState(0);
  const [scrollRatio, setScrollRatio] = useState<any | null>(null);

  useEffect(() => {
    const loadGifs = async () => {
      const response = await fetchTredingGifs(0);
      setGifs(response.data.data);
    }

    loadGifs();
  }, [])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const ratio = entries[0].intersectionRatio;
      setScrollRatio(ratio);
    })

    intersectionObserver.observe(scrollObserver.current)

    return () => {
      intersectionObserver.disconnect();
    }
  }, [])

  useEffect(() => {
    const loadMoreGifs = async (term: string) => {
      const newOffset = offset + 10;
      let response;
      setOffset(newOffset)

      if (term === '') {
        response = await fetchTredingGifs(newOffset);
      } else {
        response = await searchGifs(term, newOffset);
      }

      const newGifs = [...gifs]
      newGifs.push(...response.data.data)
      setGifs(newGifs);
    }


    if (scrollRatio > 0 && gifs.length > 0) {
      loadMoreGifs(term);
    }

  }, [scrollRatio])

  const handleSearch = async (e: any) => {
    let newTerm = e.target.value;
    let response

    if (newTerm.length > 1) {
      response = await searchGifs(newTerm, 0);
      const searchedGifs = response.data.data
      searchedGifs.length > 0 ? setGifs(searchedGifs) : setGifs([]);
    } else {
      response = await fetchTredingGifs(0);
      setGifs(response.data.data);
    }

    setTerm(newTerm);
  }

  const searchGifs = async (term: string, offset: number) => {
    return await api.get('/search', {
      params:
      {
        api_key: 'Ykd0y68FN92mO1Lc6jR8iCnYhtEKL6Ze',
        q: term,
        limit: 12,
        offset: offset,
        rating: 'g'
      }
    });
  }

  const fetchTredingGifs = async (offset: number) => {
    return await api.get('/trending', {
      params:
      {
        api_key: 'Ykd0y68FN92mO1Lc6jR8iCnYhtEKL6Ze',
        limit: 12,
        offset: offset,
        rating: 'g'
      }
    });
  }

  return (
    <div className="App">
      <main className="main">
        <div className="container">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} size="lg" color="#b0a4df" />
            <input type="text" placeholder="Find your gif" onChange={handleSearch} />
          </div>
          <Grid gifs={gifs} />
          <div ref={scrollObserver}></div>
        </div>
      </main>
    </div>
  );
}

export default App;
