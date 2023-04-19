import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import {  StoreContext  } from './context';
import rootStore from './mobx/rootStore';
import { ProSidebarProvider } from 'react-pro-sidebar';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreContext.Provider value={rootStore}>
      <ProSidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProSidebarProvider>
    </StoreContext.Provider>
);
