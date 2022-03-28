import React, { useRef } from 'react';
import Grid from '../../components/Grid/Grid';
import { useDispatch } from 'react-redux';

import '../../App.css'
import SideBar from '../../components/SideBar/Sidebar';

import { FavoritesContainer } from './styles';
import { useFavoriteGifs } from '../../hooks/useFavoriteGifs';
import { removeAllGifs } from '../../store/ducks/FavoriteGifs/actions';

const Favorites: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { gifs: storedGifs } = useFavoriteGifs();
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(removeAllGifs());
  }

  return (
    <>
    <SideBar  />
    <FavoritesContainer>
      {storedGifs.length > 0 ? (
        <>
        <div ref={containerRef}>
          <button type="button" className="remove-btn" onClick={handleRemoveAll}>
            Remove All
          </button>
        </div>
        <Grid gifs={storedGifs} ref={containerRef} />
        </>
      ) : (
        <h1>No gif found</h1>
      )}
    </FavoritesContainer>
    </>
  );
}

export default Favorites;