/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Grid from './components/Grid/Grid';
import GlobalStyles from './styles/GlobalStyles';

import './App.css'
import { fetchTredingGifs, searchGifs } from './services/GifsService';
import { colors } from './styles/colors';

const App = () => {
  const scrollObserver = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [gifs, setGifs] = useState<any>([]);
  const [term, setTerm] = useState('');
  const [offset, setOffset] = useState(0);
  const [scrollRatio, setScrollRatio] = useState<any | null>(null);

  const loadGifs = useCallback(async () => {
    const response = await fetchTredingGifs(12, 0);
    setGifs(response.data.data);
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const ratio = entries[0].intersectionRatio;
      setScrollRatio(ratio);
    })

    intersectionObserver.observe(scrollObserver.current)
    loadGifs();

    return () => {
      intersectionObserver.disconnect();
    }
  }, [loadGifs])

  useEffect(() => {
    const loadMoreGifs = async (term: string) => {
      const newOffset = offset + 10;
      let response;
      setOffset(newOffset)

      if (term === '') {
        response = await fetchTredingGifs(12, newOffset);
      } else {
        response = await searchGifs(term, 12, newOffset);
      }

      setGifs([...gifs, ...response.data.data]);
    }

    if (scrollRatio > 0 && gifs.length > 0) {
      loadMoreGifs(term);
    }

  }, [scrollRatio])

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let newTerm = event.target.value;
    let response;
    setTerm(newTerm);

    if (newTerm.length > 1) {
      response = await searchGifs(newTerm, 12, 0);
      const searchedGifs = response.data.data
      searchedGifs.length > 0 ? setGifs(searchedGifs) : setGifs([]);
    } else {
      response = await fetchTredingGifs(12, 0);
      setGifs(response.data.data);
    }
  }

  return (
      <main className="App">
        <section className="container">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} size="lg" color={colors.secondary} />
            <input type="text" placeholder="Find your gif and share it" onChange={handleSearch} />
          </div>
          <Grid gifs={gifs} />
          <div ref={scrollObserver} />
        </section>
        <GlobalStyles />
      </main>
  );
}

export default App;
