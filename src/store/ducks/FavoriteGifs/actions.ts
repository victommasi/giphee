import { FavoriteGifsTypes, Gif } from './types';

export const storeGif = (data: Gif) => ({
  type: FavoriteGifsTypes.STORE_GIF,
  payload: {
    data,
  },
});

export const removeGif = (data: Gif) => ({
  type: FavoriteGifsTypes.REMOVE_GIF,
  payload: {
    data,
  },
});

export const removeAllGifs = () => ({
  type: FavoriteGifsTypes.REMOVE_ALL_GIF,
});
