import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MarketPlace from './MarketPlace';
import Error from './Error';
import Home from './components/Home/Home';
import More from './More';
import Product from './components/MarketPlace/ListingItems/Product';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);





root.render(
    <Provider store={store}>
      {/* <RouterProvider router={appRouter}/> */}
      <App/>
    </Provider>
);


