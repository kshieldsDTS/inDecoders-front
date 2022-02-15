/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api_url from '../apiConfig';
import { useNavigate } from 'react-router-dom';

function Profile({ userInfo, loggedIn }) {
    const navigate = useNavigate()
    const [currentUserData, setCurrentUserData] = useState()
    const [editing, setEditing] = useState(false)
    const [newUserData, setNewUserData] = useState()
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        const url = `${api_url}`;
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
            const response = await axios.patch(`${api_url}getusers/${currentUserData.id}`, newUserData, {
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
            const response = await axios.delete(`${api_url}getusers/${currentUserData.id}`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            console.log(response);
            if (response.status === 204);
                navigate('/')
        } catch (error)  {}
    }
    function test (){
        console.log(newUserData);
    }
    return (
        <div>
        {!currentUserData ? (
            'Loading profile...' 
        ) : !editing ? (
            <div>
                <p>Username: {currentUserData.username}</p>
                <p>Email: {currentUserData.email}</p>
                <p>Skills: {currentUserData.skills}</p>
                <p>About: {currentUserData.bio}</p>
                <p>Portfolio: {currentUserData.portfolio}</p>
                <p>Preferred Pay Rate: ${currentUserData.payrate}/hour</p>
            </div>
        ) : (
            <div>
                <label>Username:</label>
                <input
                    type='text'
                    id='username'
                    onChange={handleChange}
                    defaultValue={currentUserData.username}></input>
                <label>Email:</label>
                <input
                    type='email'
                    id='email'
                    onChange={handleChange}
                    defaultValue={currentUserData.email}></input>
                <label>Skills:</label>
                <input 
                    type='text'
                    id='skills'
                    onChange={handleChange}
                    defaultValue={currentUserData.skills}></input>
                <label>About:</label>
                <textarea
                    type='text'
                    id='bio'
                    rows='5'
                    cols='50'
                    onChange={handleChange}
                    defaultValue={currentUserData.bio}></textarea>
                <label>Portfolio:</label>
                <input
                    type='url'
                    id='portfolio'
                    onChange={handleChange}
                    defaultValue={currentUserData.portfolio}></input>
                <label>Preferred Pay Rate:</label>
                <input
                    type='number'
                    id='payrate'
                    onChange={handleChange}
                    defaultValue={currentUserData.payrate}></input>
            </div>
        )}
        {userInfo && currentUserData && loggedIn ? (
            userInfo.username === currentUserData.username ? (
                !editing ? (
                    <button onClick={editProfile}>Edit Profile</button>
                ) : ( 
                    <div>
                        <div>
                            <button onClick={updateProfile}>Update</button>
                            <button onClick={editProfile}>Cancel</button>
                        </div>
                        <div>
                            <button onClick={deleteProfile}>Delete</button>
                        </div>
                    </div>
                )
            ) : null
        ) : null }
        <button onClick={test}>Test</button>
        {success ? <p>You have successfully updated your Profile!</p> : null }
        </div>
    );
}

export default Profile;