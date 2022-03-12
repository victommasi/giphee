import React from 'react';

import { CardContainer } from './styles';

type CardProps = {
  gif: GifProps
}

type GifProps = {
  id: string,
  images: any,
  title: string,
  url: string,
  username: string,
}

const Card: React.FC<CardProps> = ({ gif }: CardProps) => {
  return <CardContainer>
    <img alt={gif.title} title={gif.title} src={gif.images.preview_gif.url}></img>
    <p className="title">{gif.title}</p>
  </CardContainer>;
}

export default Card;