import React, { Component } from "react";
import fire from "./fire";
import  "../App";
import "../App.css";

class advocate extends Component{
    constructor(props)
    {
        super(props);
        this.signup=this.signup.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            UserName: "",
            email: "",
            PhoneNumber: "",
            location: "",
            password: ""
        }
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
                <h1 className="head">CLIENT</h1>
                <input type="text" 
                    id="input-field" 
                    name="text"
                    placeholder="User Name"
                    onChange={this.handleChange} 
                    value={this.state.text} 
                    />

                    <input type="email" 
                    id="input-field" 
                    name="email"
                    placeholder="Email Id"
                    onChange={this.handleChange} 
                    value={this.state.email} 
                    />
                    
                    <input type="number" 
                    id="input-field" 
                    name="number"
                    placeholder="Phone Number"
                    onChange={this.handleChange} 
                    value={this.state.number} 
                    />

                    <input type="text" 
                    id="input-field" 
                    name="text"
                    placeholder="Location"
                    onChange={this.handleChange} 
                    value={this.state.text} 
                    />
                      <select class="option">
                        <option>Specialization..</option>
                        <option value="Criminal">Criminal</option>
                        <option value="Banking-Finance">Banking-Finance</option>
                        <option value="Civil-Property">Civil-Property</option>
                        <option value="Employment-Labour">Employment-Labour</option>
                        <option value="Cyber">Cyber</option>
                        <option value="Lawyers-Matrimonials">Lawyers-Matrimonials</option>
                        <option value="Business-Mercentile">Business-Mercantile</option>
                        <option value="Others">Others</option>  
                    </select>

                      <input type="number" 
                    id="input-field" 
                    name="number"
                    placeholder="Experience"
                    onChange={this.handleChange} 
                    value={this.state.number} 
                    />
                     <input type="password" 
                    id="input-field" 
                    name="password"
                    onChange={this.handleChange}
                    placeholder="Create Password"
                    value={this.state.password} 
                    />
                     <input type="checkbox" class="check-box" /><span>Remember Password</span>
                    <button className="submit" onClick={this.signup}>Register</button>
                </form>
            </div>
        )
    }
}
    
export default advocate;