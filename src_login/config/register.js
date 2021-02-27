import React from "react";
import  "../App";
import "../App.css";

const Register = () => {
    return(
        <div >
            <form class="box">
                    <h1>Register As</h1>
                    <input type="button" value="CLIENT" />
                    <input type="button" value="ADVOCATE" />
            </form>
        </div> 
    );
}

export default Register;