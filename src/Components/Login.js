import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import api_url from '../apiConfig';

function Login({ handleSetLoggedIn }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState();
    function handleChange(ev){
        setFormData({...formData, [ev.target.id]: ev.target.value })
    }
    function submitForm(ev) {
        ev.preventDefault()
        sendData();
    }
    const sendData = async() => {
        const response = await axios.post(`${api_url}token/login/`, formData)
        console.log(response);
        if (response.status === 200) {
            handleSetLoggedIn(response.data.auth_token);
            navigate('/')
        }
    }
    return (
        <div>
            <form>
                <legend>Email:</legend>
                <input type='text' id='email' onChange={handleChange} required></input>
                <legend>Password:</legend>
                <input type='password' id='password' onChange={handleChange} required autoComplete='auto'></input>
                <br/>
                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
}

export default Login;