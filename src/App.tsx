import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import {
  BrowserRouter,
} from "react-router-dom";
import './App.css'
import Router from './router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

const App = () => {
  return (
      <main className="App">
         <Provider store={store}>
            <PersistGate persistor={persistor}>
              <BrowserRouter basename={process.env.PUBLIC_URL}>
                  <GlobalStyles />
                  <Router />
              </BrowserRouter>
            </PersistGate>
          </Provider>
      </main>
  );
}

export default App;


