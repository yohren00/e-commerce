import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/hmoepage/homepage.jsx";
import ShopPage from "./pages/shop/shop.jsx";
import Header from "./components/header/header.jsx";
import SignInPage from "./pages/sign-in-page/sign-in-page.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";


function App() {

  const [user, setUser] = useState({ currentUser: null });


  useEffect(() => {
    componentDidMoubt();
  }, [])

  let unsubscribeFromAuth = null

  const componentDidMoubt = () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            ...user,
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setUser({ ...user, currentUser: userAuth });
    });
  }

  let componentWillUnmount = () => {
    unsubscribeFromAuth();
  }
  console.log(user.currentUser)

  return <>
    <div>
      <Header currentUser={user.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInPage}></Route>
      </Switch>
    </div>
  </>
}

export default App;
