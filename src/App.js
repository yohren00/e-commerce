import React from 'react';
import './App.css';
import HomePage from "./pages/hmoepage/homepage";
import { Route, Switch } from "react-router-dom";
import HastPage from "./pages/shop/hastpage/hastpage";

function App() {
  return <>
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop/hats" component={HastPage}></Route>

      {/* <HomePage /> */}
    </div>
  </>
}

export default App;
