import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import api_url from '../apiConfig';

const blankData = {
    skills: '',
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    availability: "",
    payrate_desired: 0
}
function CreateSeeker(props) {
    const navigate = useNavigate()
    const [postData, setPostData] = useState(blankData)
    const [success, setSuccess] = useState(false)
    function handleChange(ev) {
        setPostData({ ...postData, [ev.target.id]: ev.target.value})
    } 
    function toggleChange(ev) {
        setPostData({ ...postData, [ev.target.id]: ev.target.checked})
    }
    const postSeeker = async () => {
        try {
            const response = await axios.post(`${api_url}LFWork/`, postData, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
            if (response.status === 201) {
                setSuccess(true)
                setTimeout(() => {
                navigate(`/lfw/${response.data.id}`)
                }, 5000)
            }
        } catch (error) {}}
    return (
			<div>
				<form>
					<label>Skills:</label>
					<input type='text' id='skills' onChange={handleChange}></input>
					<label>Availability:</label>
					<label>Sunday</label>
					<input type='checkbox' onClick={toggleChange} id='sunday'></input>
					<label>Monday</label>
					<input type='checkbox' onClick={toggleChange} id='monday'></input>
					<label>Tuesday</label>
					<input type='checkbox' onClick={toggleChange} id='tuesday'></input>
					<label>Wednesday</label>
					<input type='checkbox' onClick={toggleChange} id='wednesday'></input>
					<label>Thursday</label>
					<input type='checkbox' onClick={toggleChange} id='thursday'></input>
					<label>Friday</label>
					<input type='checkbox' onClick={toggleChange} id='friday'></input>
					<label>Saturday</label>
					<input type='checkbox' onClick={toggleChange} id='saturday'></input>
					<label>Pay/Hour:</label>
					<input type='number' onChange={handleChange} id='payrate_desired'></input>
				</form>
                {success ? <p>Your post has been created successfully. Redirecting you to your new post.</p> 
                : 
                <button onClick={postSeeker}>Post It</button>}
			</div>
		);
}

export default CreateSeeker;