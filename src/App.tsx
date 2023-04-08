




import React from 'react';
import Home from './components/Home/Home'
import Product from './components/MarketPlace/ListingItems/Product'
import MarketPlace from './MarketPlace';
import Error from './Error'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Header from './common/components/Header';
import More from './More';
import MarketPlaceM from './components/MarketPlace/ListingItems/MarketPlaceM';
import Dashboard from './components/UserDashboard/Dashboard';
import Login from './components/Login/Login';
import SignUP from './components/Login/SignUP';

export default function App() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/market" element={<MarketPlace/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/signup" element={<SignUP/>} />
        <Route  path="/market/callout" element={<MarketPlaceM/>} />
        <Route  path="/more" element={<More/>} />
        <Route path="/market/callout/:id" element={<Product/>} />
        {/* <Route path="*" element={<Error/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}