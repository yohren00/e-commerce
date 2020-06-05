import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/hmoepage/homepage.jsx";
import ShopPage from "./pages/shop/shop.jsx";
import Header from "./components/header/header.jsx";
import SingInPage from "./pages/sing-in-page/sing-in-page.jsx";

function App() {
  return <>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/singin" component={SingInPage}></Route>
      </Switch>
    </div>
  </>
}

export default App;
