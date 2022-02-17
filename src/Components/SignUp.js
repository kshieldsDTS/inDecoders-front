import React, { useState } from 'react';
import axios from 'axios';
import URL from '../apiConfig';
import { Link, useNavigate } from 'react-router-dom'

const initialFormData = {
	username: '',
	email: '',
	password: '',
	re_password: '',
};

function NewUser(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    function handleChange(ev){
        setFormData({...formData, [ev.target.id]: ev.target.value})
    }
    function handlePasswordMatch(ev) {
			if (formData.password !== formData.re_password) {
				setError(true);
			} else {
				setError(false);
			}
		};
	function handleSubmit(ev){
        ev.preventDefault();
        sendData()
    }
    const sendData = async() => {
        const response = await axios.post(`${URL}users/`, formData)
        if (response.status === 201) {
            setSuccess(true)
            setTimeout(() => {
                navigate('/login')
            }, 5000)
        }
    }
    return (
			<div>
				<h2>Create a new inDecoders account!</h2>
				<div className='outer-user-wrapper'>
					<div className='user-card-wrapper'>
						<form className='user-card'>
							<div className='user-detail'>
								<div className='item'>
									<label className='label'>Username:</label>
									<input
										type='text'
										className='edit'
										id='username'
										onChange={handleChange}></input>
								</div>
								<div className='item'>
									<label className='label'>Email</label>
									<input
										type='text'
										className='edit'
										id='email'
										onChange={handleChange}></input>
								</div>
								<div className='item'>
									<label className='label'>Password</label>
									<input
										type='password'
										id='password'
										className='edit'
										onChange={handleChange}
										autoComplete='on'></input>
								</div>
								<div className='item'>
									<label className='label'>Confirm Password</label>
									<input
										type='password'
										id='re_password'
                                        className='edit'
										onChange={handleChange}
										onBlur={handlePasswordMatch}
										autoComplete='on'></input>
								</div>
							</div>
							{!error ? null : 'Passwords do not match!'}
							<button className='dashboard-seeker' type='submit' onClick={handleSubmit}>
								Sign Up!
							</button>
							{success ? (
								<p>
									You have successfully created an account with inDecoders. You
									will be automatically be redirected to log in. If you are not
									automatically redirected, please click{' '}
									<Link to='/login'>here.</Link>
								</p>
							) : null}
						</form>
					</div>
				</div>
			</div>
		);
}

export default NewUser;