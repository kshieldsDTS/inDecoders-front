import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const initialFormData = {
	username: '',
	email: '',
	password: '',
	re_password: '',
};

function NewUser(props) {
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(false)
    function handleChange(ev){
        setFormData({...formData, [ev.target.id]: ev.target.value})
    }
    function handleSubmit(ev){
        ev.preventDefault()
        console.log(formData);
    }
    function handlePasswordMatch(ev){
        if (formData.password !== formData.re_password) {
            setError(true);
        } else {
            setError(false);
        }
    }
    return (
			<div>
				<h2>Create a new inDecoders account!</h2>
				<form>
					<label>Username</label>	
                    <input type='text' id='username' onChange={handleChange}></input>
					<label>Email</label>
					<input type='text' id='email' onChange={handleChange}></input>
					<label>Password</label>
					<input type='password' id='password' onChange={handleChange}></input>
					<label>Confirm Password</label>
					<input type='password' id='re_password' onChange={handleChange}></input>
                    <button type='submit' onClick={handleSubmit}>Sign Up!</button>
				</form>
			</div>
		);
}

export default NewUser;