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
          setUser({
            ...user,
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      };
      setUser({ ...user, currentUser: userAuth });
    });
  };

  const componentWillUnmount = () => {
    unsubscribeFromAuth();
  };

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


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       currentUser: null
//     };
//   }

//   unsubscribeFromAuth = null

//   componentDidMount = () => {
//     console.log("componentDidMount")

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);
//         userRef.onSnapshot(snapShot => {
//           this.setState({
//             currentUser: {
//               id: snapShot.id,
//               ...snapShot.data()
//             }
//           });
//         });
//       };
//       this.setState({ currentUser: userAuth });
//     });
//   };

//   componentWillUnmount = () => {
//     console.log("componentWillUnmount")

//     this.unsubscribeFromAuth();
//   };

//   render() {
//     return <>
//       <div>
//         <Header currentUser={this.state.currentUser} />
//         <Switch>
//           <Route exact path="/" component={HomePage}></Route>
//           <Route exact path="/shop" component={ShopPage}></Route>
//           <Route exact path="/signin" component={SignInPage}></Route>
//         </Switch>
//       </div>
//     </>
//   }
// }


export default App;
