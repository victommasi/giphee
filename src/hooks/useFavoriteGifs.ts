import { useSelector } from 'react-redux';
import { ApplicationState } from '../store/store';

export const useFavoriteGifs = () => {
  return useSelector((store: ApplicationState) => store.fav);
}