/**
 * Action types
 */
export enum FavoriteGifsTypes {
  STORE_GIF = '@favorite/STORE_GIF',
  REMOVE_GIF = '@favorite/REMOVE_GIF',
  REMOVE_ALL_GIF = '@favorite/REMOVE_ALL_GIF',
}

/**
 * Data types
 */

export interface Gif {
  id: string,
  images: any,
  title: string,
  embed_url: string,
  username: string,
}

export interface Gifs {
  gifs: Gif[];
}

/**
 * State type
 */
export interface FavoriteGifsState extends Gifs {}
