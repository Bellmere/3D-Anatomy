import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import {  StoreContext  } from './context';
import rootStore from './mobx/rootStore';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreContext.Provider value={rootStore}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StoreContext.Provider>
);
