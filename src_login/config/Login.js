import React, { Component } from "react";
import fire from "./fire";
import  "../App";
import "../App.css";

class Login extends Component{
    constructor(props)
    {
        super(props);
        this.Login=this.Login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signup=this.signup.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            email: "",
            password: ""
        }
    }
    Login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>
        {
         console.log(u);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange(e){
        this.setState({
           [e.target.name] : e.target.value 
        })
    }
render()
{
    return(
        
        <div className="hero">
            <form className="form">
            <h1 className="head">LOGIN</h1>
                <input type="email" 
                id="input-field" 
                name="email"
                placeholder="Email Id"
                onChange={this.handleChange} 
                value={this.state.email} 
                />
                 <input type="password" 
                id="input-field" 
                name="password"
                onChange={this.handleChange}
                placeholder="Enter Password"
                value={this.state.password} 
                />
                 <input type="checkbox" class="check-box" /><span>Remember Password</span>
                <button className="submit" onClick={this.Login}>Login</button>
                <div className="link">Not a member? <a href="register.js">Signup</a></div>
            </form>
        </div>
    )
}
}

export default Login;