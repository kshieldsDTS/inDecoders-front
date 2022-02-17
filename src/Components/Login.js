import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import URL from '../apiConfig';

function Login({ handleSetLoggedIn }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState();
    const [error, setError] = useState(false)
    function handleChange(ev){
        setFormData({...formData, [ev.target.id]: ev.target.value })
    }
    function submitForm(ev) {
        setError(false)
        ev.preventDefault()
        sendData();
    }
    const sendData = async() => {
        try {
            const response = await axios.post(`${URL}token/login/`, formData)
            if (response.status === 200) {
                handleSetLoggedIn(response.data.auth_token);
			    navigate('/');
            } else {
                setError(true)
            }
        } catch(error){
            setError(true)
        }
    }
    return (
			<div className='outer-user-wrapper'>
				<div className='user-card-wrapper'>
					{error ? (
						<p className='error'>
							The combination of password and email you used was not found in
							our systems. Please try again.
						</p>
					) : null}
					<form className='user-card'>
						<legend className='label'>Email:</legend>
						<input
							type='text'
							id='email'
							className=''
							onChange={handleChange}
							required></input>
						<legend className='label'>Password:</legend>
						<input
							type='password'
							id='password'
							className='edit'
							onChange={handleChange}
							required
							autoComplete='auto'></input>
						<br />
						<button
							className='dashboard-seeker submit-button'
							type='submit'
							onClick={submitForm}>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
}

export default Login;