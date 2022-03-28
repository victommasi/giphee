import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FavoriteGifsState } from './ducks/FavoriteGifs/types';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  fav: FavoriteGifsState;
}

const persistConfig = {
  key: 'giphee',
  storage,
  whitelist: ['fav'],
};

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware())
    : applyMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store: Store<ApplicationState> = createStore(persistedReducer, composeEnhancers);

const persistor = persistStore(store);

export { store, persistor };
