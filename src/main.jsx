import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import { PokemonRouter } from './routes';

import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <PokemonRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
