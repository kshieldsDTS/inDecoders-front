import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Login(props) {
    const [information, setInformation] = useState({})
    function handleChange(ev){
        setInformation({...information, [ev.target.id]: ev.target.value })
    }
    function submitForm(ev) {
        ev.preventDefault()
        
    }
    return (
        <div>
            <form>
                <legend>Email:</legend>
                <input type='text' id='email' onChange={handleChange} required></input>
                <legend>Password:</legend>
                <input type='text' id='password' onChange={handleChange} required></input>
                <br/>
                <button onClick={submitForm}>Submit Form</button>
            </form>
        </div>
    );
}

export default Login;