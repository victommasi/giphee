import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartAlt } from '@fortawesome/free-regular-svg-icons'

import { CardContainer } from './styles';
import { colors } from '../../styles/colors';

type CardProps = {
  gif: Gif,
}

export type Gif = {
  id: string,
  images: any,
  title: string,
  embed_url: string,
  username: string,
}

const Card: React.FC<CardProps> = ({ gif }: CardProps) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }

  }, [copied]);

  const handleCopyURL = () => {
    navigator.clipboard.writeText(gif.embed_url);
    setCopied(true);
  }

  const handleSetFavorite = () => {
    setFavorite(!favorite);
  }

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