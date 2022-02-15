import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../apiConfig';

const blankData = {
    project_name: '',
    description: '',
    skills_desired: '',
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    timeline: '',
    payrate: 0,
}
function CreateProject(props) {
    const navigate = useNavigate()
    const [postData, setPostData] = useState(blankData)
    const [success, setSuccess] = useState(false)
    function handleChange(ev) {
	    setPostData({ ...postData, [ev.target.id]: ev.target.value });
    }
    function toggleChange(ev) {
	    setPostData({ ...postData, [ev.target.id]: ev.target.checked });
    }
    const postProject = async () => {
			try {
				const response = await axios.post(`${URL}LFHelp/`, postData, {
					headers: {
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				});
				if (response.status === 201) {
					setSuccess(true);
					setTimeout(() => {
						navigate(`/lfh/${response.data.id}`);
					}, 5000);
				}
			} catch (error) {}
		};
    return (
			<div>
				<form>
					<label>Project Name:</label>
					<input type='text' id='project_name' onChange={handleChange}></input>
					<label>Description:</label>
					<input type='text' id='description' onChange={handleChange}></input>
					<label>Skills Needed:</label>
					<input
						type='text'
						id='skills_desired'
						onChange={handleChange}></input>
					<label>Timeline:</label>
					<input type='text' id='timeline' onChange={handleChange}></input>
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
					<label>Payrate</label>
					<input type='number' id='payrate' onChange={handleChange}></input>
				</form>
				{success ? (
					<p>
						Your post has been created successfully. Redirecting you to your new
						post.
					</p>
				) : (
					<button onClick={postProject}>Post It</button>
				)}
			</div>
		);
}

export default CreateProject;