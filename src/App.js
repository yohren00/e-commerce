import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/hmoepage/homepage.jsx";
import ShopPage from "./pages/shop/shop.jsx";
import Header from "./components/header/header.jsx";
import SignInPage from "./pages/sign-in-page/sign-in-page.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions.js";


function App() {

  const dispatch = useDispatch();
  const currentUser = user => {
    dispatch(setCurrentUser(user))
  };

  // const [user, setUser] = useState({ currentUser: null });

  useEffect(() => {
    console.log("useEffect");
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
          currentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      };
      currentUser(userAuth);
    });
  };

  const componentWillUnmount = () => {
    unsubscribeFromAuth();
  };

  return <>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInPage}></Route>
      </Switch>
    </div>
  </>
}
export default App;


// class App extends React.Component {

//   unsubscribeFromAuth = null

//   componentDidMount() {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);
//         userRef.onSnapshot(snapShot => {
//           this.props.setCurrentUser({
//             id: snapShot.id,
//             ...snapShot.data()
//           });
//         });

//       };
//       this.props.setCurrentUser(userAuth);
//     });
//   };

//   componentWillUnmount = () => {
//     this.unsubscribeFromAuth();
//   };

//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={HomePage}></Route>
//           <Route exact path="/shop" component={ShopPage}></Route>
//           <Route exact path="/signin" component={SignInPage}></Route>
//         </Switch>
//       </div>)
//   }
// }
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

// export default connect(null, mapDispatchToProps)(App);
