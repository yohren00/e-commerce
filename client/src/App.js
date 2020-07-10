import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import './global.styles.scss';

import HomePage from "./pages/hmoepage/homepage.jsx";
import ShopPage from "./pages/shop/shop.jsx";
import Header from "./components/header/header.jsx";
import SignInPage from "./pages/sign-in-page/sign-in-page.jsx";
import CheckOut from "./pages/checkout/checkout.jsx";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { setCurrentUser } from "./redux/user/user.actions.js";
import { selectCurrentUser } from "./redux/user/user.selectors.js";


function App() {

  const dispatch = useDispatch();
  const dispatchSetCurrentUser = user => {
    dispatch(setCurrentUser(user))
  };

  const currentUser = useSelector(state => selectCurrentUser(state));

  useEffect(() => {
    componentDidMount();
    return () => {
      componentWillUnmount();
    };
  }, []);

  let unsubscribeFromAuth = null

  const componentDidMount = () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          dispatchSetCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      };
      dispatchSetCurrentUser(userAuth);
      // addCollectionAndDocuments("collections", collectionsArray.map(({ title, items }) => ({ title, items })))
    });
  };

  const componentWillUnmount = () => {
    unsubscribeFromAuth();
  };

  return <>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? (<Redirect to="/" />) : (<SignInPage />)}
        />
        <Route exact path="/checkout" component={CheckOut} />
      </Switch>
    </div>
  </>
}
export default App;

