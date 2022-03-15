import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import {
  BrowserRouter,
} from "react-router-dom";
import './App.css'
import Router from './router';

const App = () => {
  return (
      <main className="App">
         <BrowserRouter>
            <GlobalStyles />
            <Router />
        </BrowserRouter>
      </main>
  );
}

export default App;


