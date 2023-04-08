import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
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



// const appRouter = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     errorElement:<Error/>,
//     children:[
//       {
//         path:"/home",
//         element:<Home/>,
//       },{
//         path:"/market",
//         element:<MarketPlace/>
//       },
//       {
//         path:"/market/:id",
//         element:<Product/>
//       }
//     ]
//   }
//   ,{
//     path:"/market",
//     element:<MarketPlace/>
//   },{
//     path:"/market/:id",
//     element:<Product/>
//   }
// ])


root.render(
    <Provider store={store}>
      {/* <RouterProvider router={appRouter}/> */}
      <App/>
    </Provider>
);


