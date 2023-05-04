import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Signup.css";

export default function Login() {

    const history = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    async function handleLogin(e) {
        e.preventDefault();

        if (!email || !password) {
            return setError('Please enter email and password..!!')
        }

        try {
            const { data, status } = await axios.post("/api/users/login", {
              email,
              password,
            });
            if (status === 200) {
              localStorage.setItem("currentUser", JSON.stringify(data));
              window.location.href = "/home";
            } else {
              setError("Invalid Credentials.");
            }
          } catch (error) {
            console.log(error);
            setError("Something went wrong. Please try again later.");
          }

        
    }


    return (
        <div className="back-body">
            <div className="registration-form">
                <form action='POST'>
                    <div className="subhead">
                        <h2>Admins Login</h2>
                    </div>
                    <div className="form-icon">
                        <span><i className="icon icon-user"></i></span>
                    </div>
                    <div className="form-group">
                        <input type="name" className="form-control item" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='User Name' id='' />
                        {error && name.length <= 0 ?
                        <label className="error">Enter User Name !!</label> : ""}
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control item" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' id='' />
                        {error && email.length <= 0 ?
                        <label className="error">Fill the field !!</label> : ""}
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' id='' />
                        {error && password.length <= 0 ?
                        <label className="error">Fill the field..!!</label> : ""}
                    </div>

                    <center>
                        <div className="form-group">
                            <button type="submit" onClick={handleLogin} className="btn btn-block create-account float-Right ">Login</button>
                        </div>
                    </center>
                    <div className="text">
                            <h5>or</h5>
                            <p>Don't have an account? </p>
                            <a href="#"></a>
                            <Link to="/signup" style={{ textDecoration: "none" }}><h5>Sign Up</h5></Link>
                        </div>
                    
                </form>
            </div>
        </div>
    )
}
