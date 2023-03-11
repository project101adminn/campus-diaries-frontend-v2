// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Outlet } from 'react-router';
// import Header from './common/components/Header';
// import Footer from './common/components/Footer';
// import Home from './components/Home/Home';

  




// function App() {
  
  

//   return (
//     <div className="App">
      
//       <Header/>
//       <Outlet/>
//       {/* <Home/> */}
//       <Footer/>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import Home from './components/Home/Home'
import Product from './components/MarketPlace/Product'
import MarketPlace from './MarketPlace';
import Error from './Error'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Header from './common/components/Header';
import More from './More';

export default function App() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/market" element={<MarketPlace/>} />
        <Route  path="/more" element={<More/>} />
        <Route path="/market/:id" element={<Product/>} />
        {/* <Route path="*" element={<Error/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}