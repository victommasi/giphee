import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import { CardContainer } from './styles';
import { colors } from '../../styles/colors';

type CardProps = {
  gif: GifProps
}

export type GifProps = {
  id: string,
  images: any,
  title: string,
  embed_url: string,
  username: string,
}

const Card: React.FC<CardProps> = ({ gif }: CardProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }

  }, [copied]);

  const handleCopyURL = () => {
    navigator.clipboard.writeText(gif.embed_url);
    setCopied(true);
  }

  return <CardContainer>
    <img alt={gif.title} title={gif.title} src={gif.images.preview_gif.url}/>
    <div className="Card__info">
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