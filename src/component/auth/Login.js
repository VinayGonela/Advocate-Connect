import React, { useState } from 'react';
import "./Login.css"
import { auth, provider } from "../../firebase";
import { Link , useHistory } from "react-router-dom";
 

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [User, setUser] = useState("");
    // const [EmailError, setEmailError] = useState("");
    // const [PasswordError, setPasswordError] = useState("");

    const clearInputs = () => {
      setEmail('');
      setPassword('');
    }

    // const clearErrors = () => {
//   setEmailError('');
//   setPasswordError('');
// } 
  
    const signIn = () => {
      auth.signInWithPopup(provider).catch((e) => {
        alert(e.message);
      });
    };
   const history = useHistory()
 
    const handleSignIn = (e) => {
      e.preventDefault();
      
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
          // console.log("user",User);
          // alert('Logged In Successfully');
           history.replace("/")
          clearInputs();
        })
        .catch((err) => {
          alert('User Not Found ! please Register');
          clearInputs(); 
          // switch (err.code) {
          //   case "auth/invalid-email":
          //   case "auth/user-disabled":
          //   case "auth/user-not-found":
          //     // setEmailError(err.message);
          //     break;
          //   case "auth/wrong-password":
          //     // setPasswordError(err.message);
          //     break;
          //     // no default
          //     setEmail("");
          //     setPassword("")
          // }
        }
      );  
        
    };
  
   return (
        <div className="hero">
        <form className="form">
        <h1 className="head">LOGIN</h1>
            <input type="text" 
            id="input-field" 
            name="email"
            placeholder="Email Id"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            />
        
             <input type="password" 
            id="input-field" 
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            value={password} 
            />
            
             <input type="checkbox" className="check-box" /><span>Remember Password</span>
            <button className="submit" onClick={handleSignIn}>Login</button>
            <div className="link">Not a member? <span ><Link to="/Register"><big>Register</big></Link></span></div>
        
            {/* <div className="login__logo">
              <img
                src="User.photo"
                alt=""
              />
            </div> */}
          
         <div className="login__auth">
            <div className="login__authOptions">
                <div className="login__authOption">
                  <img
                    className="login__googleAuth"
                    src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                    alt=""
                  />
                  <p onClick={signIn}>Continue With Google</p>
                  
               {/* <div className="login__auth">
                  <div className="login__authOption">
                  <img
                    className="login__googleAuth"
                    src="./facebook.png"
                    alt=""
                  />
                  <span><p>Continue With Facebook</p></span>
                </div>
                  </div> */}
                  
                </div>
              </div>
            </div>
        </form>
      </div>
    );
}

export default Login;