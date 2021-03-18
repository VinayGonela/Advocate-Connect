import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import './App.css';
import {  login, logout, selectUser } from "./features/userSlice";
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./component/auth/Login";
import Register from "./component/auth/register";
import Client from "./component/auth/client";
import Advocate from "./component/auth/advocate";
// import Navigation from "./component/auth/navigation";
import Query from "./component/Query";


function App() {

  const User = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL? authUser.photoURL : "https://wallpapersdsc.net/wp-content/uploads/2016/10/River-Images.jpg",
        display: authUser.display? authUser.display: authUser.email,
        email:authUser.email
       }));

      console.log(authUser)

    }
      else {
      dispatch(logout())
     }
    });
    
  },  []); 


  return (
    <div className="App">
     
     
     <Router>
       {/* <Navigation /> */}
      
    <Switch>
    <Route exact path="/Login"  component={Login} />
    <Route exact path="/Register"  component={Register} />
    <Route exact path="/Client"  component={Client} />
    <Route exact path="/Advocate"  component={Advocate} />
    {/* <Route exact path="/" strict component={Query} /> */}
        
    {User ? (<Query />) : (<Login />)}

    </Switch>
     </Router>
    
    </div>    
  );
}

export default App;