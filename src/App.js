import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/hmoepage/homepage.jsx";
import ShopPage from "./pages/shop/shop.jsx";

function App() {
  return <>
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop" component={ShopPage}></Route>

      {/* <HomePage /> */}
    </div>
  </>
}

export default App;
