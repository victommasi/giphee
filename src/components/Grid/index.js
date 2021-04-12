/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

import api from '../../services/api'

const Grid = () => {
  const scrollObserver = useRef();

  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(null);

  useEffect(() => {
    const loadGifs = async () => {
      const response = await api.get('/trending', {
        params:
        {
          api_key: 'Ykd0y68FN92mO1Lc6jR8iCnYhtEKL6Ze',
          limit: 10,
          offset: 0,
          rating: 'g'
        }
      });
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
    console.log(scrollRatio)

    const loadMoreGifs = async () => {
      const newOffset = offset + 10;
      setOffset(newOffset)

      const response = await api.get('/trending', {
        params:
        {
          api_key: 'Ykd0y68FN92mO1Lc6jR8iCnYhtEKL6Ze',
          limit: 10,
          offset: newOffset,
          rating: 'g'
        }
      });

      const newGifs = [...gifs]
      newGifs.push(...response.data.data)
      setGifs(newGifs);
    }


    if (scrollRatio > 0) {
      loadMoreGifs();
    }
  }, [scrollRatio])


  return (
    <ul className="grid">
      {gifs.map((gif, index) => (
        <li className="card" key={index}>
          <img alt={gif.title} title={gif.title} src={gif.images.preview_gif.url}></img>
        </li>
      ))}
      <div ref={scrollObserver}></div>
    </ul>
  );
}

export default Grid;
