/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Grid from '../../components/Grid/Grid';

import '../../App.css'
import { fetchTredingGifs, searchGifs } from '../../services/GifsService';
import { colors } from '../../styles/colors';
import { Gif } from '../../components/Card/Card';
import SideBar from '../../components/SideBar/Sidebar';

import { HomeContainer } from './styles';

const Home: React.FC = () => {
  const scrollObserver = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [term, setTerm] = useState('');
  const [offset, setOffset] = useState(0);
  const [scrollRatio, setScrollRatio] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
    <SideBar  />
    <HomeContainer>
      <div className="search" ref={containerRef}>
        <FontAwesomeIcon icon={faSearch} size="lg" color={colors.secondary} />
        <input type="text" placeholder="Find your gif and share it" onChange={handleTermChange} />
      </div>
      <Grid gifs={gifs} ref={containerRef} />
      <div ref={scrollObserver} />
    </HomeContainer>
    </>
  );
}

export default Home;


