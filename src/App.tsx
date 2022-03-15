/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Grid from './components/Grid/Grid';
import GlobalStyles from './styles/GlobalStyles';

import './App.css'
import { fetchTredingGifs, searchGifs } from './services/GifsService';
import { colors } from './styles/colors';
import { GifProps } from './components/Card/Card';

const App = () => {
  const scrollObserver = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [gifs, setGifs] = useState<GifProps[]>([]);
  const [term, setTerm] = useState('');
  const [offset, setOffset] = useState(0);
  const [scrollRatio, setScrollRatio] = useState<number>(0);
  const containerRef = useRef<null | HTMLElement>(null)

  const fetchGifs = async (term: string, offset?: number) => {
    if (term.length > 1) {
      return await searchGifs(term, 15, offset || 0);
    } else {
      return await fetchTredingGifs(15, offset || 0);
    }
  }

  const loadInitalGifs = useCallback(async () => {
    const response = await fetchGifs(term);
    setGifs(response.data.data);
  }, []);

  useEffect(() => {
    loadInitalGifs();
  }, [loadInitalGifs]);

  const loadMoreGifs = async () => {
    const newOffset = offset + 10;
    setOffset(newOffset)
    let response = await fetchGifs(term, newOffset);
    setGifs([...gifs, ...response.data.data]);
  };

  useEffect(() => {
    if (scrollRatio > 0) {
      loadMoreGifs();
    }

    const intersectionObserver = new IntersectionObserver((entries) => {
      const ratio = entries[0].intersectionRatio;
      setScrollRatio(ratio);
    })

    intersectionObserver.observe(scrollObserver.current)

    return () => {
      intersectionObserver.disconnect();
    }
  }, [scrollRatio])


  const handleTermChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    let newTerm = event.target.value;
    setTerm(newTerm);
    const response = await fetchGifs(newTerm);
    setGifs(response.data.data);
  }, []);

  const handleScrollTop = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
      <main className="App">
        <section className="container" ref={containerRef}>
          <div className="search">
            <FontAwesomeIcon icon={faSearch} size="lg" color={colors.secondary} />
            <input type="text" placeholder="Find your gif and share it" onChange={handleTermChange} />
          </div>
          <Grid gifs={gifs} />
          <button type="button" className="fab-button" onClick={handleScrollTop}>
            <FontAwesomeIcon icon={faArrowUp} size="lg" color={colors.white} />
          </button>
          <div ref={scrollObserver} />
        </section>
        <GlobalStyles />
      </main>
  );
}

export default App;


