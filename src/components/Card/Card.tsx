import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartAlt } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux';

import { CardContainer } from './styles';
import { colors } from '../../styles/colors';
import { Gif } from '../../store/ducks/FavoriteGifs/types';
import { removeGif, storeGif } from '../../store/ducks/FavoriteGifs/actions';
import { useFavoriteGifs } from '../../hooks/useFavoriteGifs';

type CardProps = {
  gif: Gif,
}

const Card: React.FC<CardProps> = ({ gif }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const { gifs: storedGifs } = useFavoriteGifs();
  const dispatch = useDispatch();

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  useEffect(() => {
    const isFavorite = storedGifs.find((g: Gif) => g.id === gif.id)
    if (isFavorite) {
      setFavorite(true);
    }
  }, [gif.id, storedGifs])

  const handleCopyURL = useCallback(() => {
    navigator.clipboard.writeText(gif.embed_url);
    setCopied(true);
  }, [gif.embed_url]);

  const handleSetFavorite = useCallback(() => {
    if (favorite) {
      dispatch(removeGif(gif));
    } else {
      dispatch(storeGif(gif));
    }
    
    setFavorite(!favorite);
  }, [dispatch, favorite, gif]);

  return <CardContainer>
    <img alt={gif.title} title={gif.title} src={gif.images.fixed_height.url}/>
    <div className="Card__info">
      <button className="Card__button Card__icon-fav" title="button" onClick={handleSetFavorite}>
        <FontAwesomeIcon icon={favorite ? faHeart : faHeartAlt} size="lg" color={favorite ? colors.lightRed : colors.white} />
      </button>
      <p className="Card__title">{gif.title}</p>
      <button className="Card__button" title="button" onClick={handleCopyURL}>
        Copy URL
        <FontAwesomeIcon icon={faCopy} size="lg" color={colors.white} />
      </button>
      {copied && <span className="Card__copied">Copied!</span>}
    </div>
  </CardContainer>;
}

export default Card;