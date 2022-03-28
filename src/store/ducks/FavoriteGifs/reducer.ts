import { Reducer } from 'redux';
import { FavoriteGifsTypes, FavoriteGifsState, Gif } from './types';

const INITIAL_STATE: FavoriteGifsState = {
  gifs: []
};

const addGif = (state: FavoriteGifsState, action: any): FavoriteGifsState => {
  return { ...state, gifs: [ ...state.gifs, action.payload.data ] };
}

const removeGif = (state: FavoriteGifsState, action: any): FavoriteGifsState => {
  return {
    ...state,
    gifs: state.gifs.filter((gif: Gif) => gif.id !== action.payload.data.id)
  };
}

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoriteGifsTypes.STORE_GIF:
      return addGif(state, action);
    case FavoriteGifsTypes.REMOVE_GIF:
      return removeGif(state, action);
    case FavoriteGifsTypes.REMOVE_ALL_GIF:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
