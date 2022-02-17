/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../apiConfig';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

function Profile({ userInfo, loggedIn }) {
    const navigate = useNavigate()
    const [currentUserData, setCurrentUserData] = useState()
    const [editing, setEditing] = useState(false)
    const [newUserData, setNewUserData] = useState()
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        const url = `${URL}`;
        (async () => {
            try {
                const initialFetch = await axios.get(`${url}users/`, { headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }})
                setCurrentUserData(initialFetch.data[0])
                const secondFetch = await axios.get(`${url}getusers/${currentUserData.id}`)
                setCurrentUserData(secondFetch.data)
            } catch (error) {}
        })()
    }, [])
    function handleChange(ev) {
		setNewUserData({ ...newUserData, [ev.target.id]: ev.target.value });
	}
    function editProfile(){
        setEditing(!editing)
        setNewUserData(currentUserData)
    }
    const updateProfile = async () => {
        try {
            const response = await axios.patch(`${URL}getusers/${currentUserData.id}`, newUserData, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            console.log(response);
            if (response.status === 200) {
                setEditing(false)
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 5000);
            }
        } catch (error) {}
    }
    const deleteProfile = async () => {
        try {
            const response = await axios.delete(`${URL}getusers/${currentUserData.id}`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            console.log(response);
            if (response.status === 204);
                localStorage.clear()
                navigate('/')
        } catch (error)  {}
    }
    function test (){
        console.log(newUserData);
    }
    return (
			<div className='detail-wrapper'>
				<div className='user-card-wrapper'>
					{currentUserData ? (
						<div className='user-card'>
							<div className='user-info'>
								<div className='item'>
									<p className='label'>Username:</p>
									<p className='value'>{currentUserData.username}</p>
								</div>
								<div className='item'>
									<p className='label'>Email:</p>
									{!editing ? (
										<p className='value'>{currentUserData.email}</p>
									) : (
										<input
											type='text'
											id='email'
											className='edit'
											onChange={handleChange}
											defaultValue={currentUserData.email}></input>
									)}
								</div>
							</div>
							<div className='user-detail'>
								<div className='item'>
									<p className='label'>Skills:</p>
									{!editing ? (
										<p className='value'>{currentUserData.skills}</p>
									) : (
										<input
											type='text'
											id='skills'
											className='edit'
											onChange={handleChange}
											defaultValue={currentUserData.skills}></input>
									)}
								</div>
								<div className='item'>
									<p className='label'>About:</p>
									{!editing ? (
										<p className='value'>{currentUserData.bio}</p>
									) : (
										<textarea
											rows='5'
											cols='40'
											id='bio'
											className='edit'
											onChange={handleChange}
											defaultValue={currentUserData.bio}></textarea>
									)}
								</div>
								<div className='item'>
									<p className='label'>Portfolio:</p>
									{!editing ? (
										<p className='value'>{currentUserData.portfolio}</p>
									) : (
										<input
											type='text'
											id='skills'
											className='edit'
											onChange={handleChange}
											defaultValue={currentUserData.skills}></input>
									)}
								</div>
								<div className='item'>
									<p className='label'>Payrate:</p>
									{!editing ? (
										<p className='value'>${currentUserData.payrate} per hour</p>
									) : (
										<input
											type='text'
											id='payrate'
											className='edit'
											onChange={handleChange}
											defaultValue={currentUserData.payrate}></input>
									)}
								</div>
							</div>
							{loggedIn && userInfo && currentUserData ? (
								userInfo.username === currentUserData.username ? (
									!editing ? (
										<div className='single-container'>
											<button
												className='edit edit-button'
												onClick={editProfile}>
												Edit Seeker
											</button>
										</div>
									) : (
										<div className='button-container'>
											<div className='safe-buttons'>
												<button
													className='edit submit-button'
													onClick={updateProfile}>
													Update
												</button>
												<button
													className='edit cancel-button'
													onClick={editProfile}>
													Cancel
												</button>
											</div>
											<div className='danger-button'>
												<button
													className='edit delete-button'
													onClick={deleteProfile}>
													Delete Seeker
												</button>
											</div>
										</div>
									)
								) : null
							) : null}
						</div>
					) : (
						<CircularProgress color='secondary' />
					)}
				</div>
				{success ? <p>You have successfully updated your Profile!</p> : null}
			</div>
		);
}

export default Profile;