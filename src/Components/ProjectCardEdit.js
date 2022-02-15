import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import api_url from '../apiConfig';

function ProjectCardEdit({ userInfo, loggedIn}) {
    const params = useParams()
    const id = params.id
	const [projectData, setProjectData] = useState();
	const [editing, setEditing] = useState(false);
	const [newProjectData, setNewProjectData] = useState();
	const [success, setSuccess] = useState(false);
	useEffect(() => {
		const url = `${api_url}LFHelp/${id}`;
		(async () => {
			try {
				const fetchedData = await axios.get(url)
				setProjectData(fetchedData.data)
			} catch(err) {
				console.error(err)
			}
		})()
	})
	function handleChange(ev) {
		setNewProjectData({ ...newProjectData, [ev.target.id]: ev.target.value });
	}
	function toggleChange(ev) {
		setNewProjectData({ ...newProjectData, [ev.target.id]: ev.target.checked });
	}
	function editProject() {
		setEditing(!editing);
		setNewProjectData(projectData);
	}
	const updateProject = async () => {
		try {
			const response = await axios.patch(
				`${api_url}LFHelp/${projectData.id}`,
				newProjectData,
				{
					headers: {
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			);
			console.log(response);
			if (response.status === 200) {
				setEditing(false);
				setSuccess(true);
				setTimeout(() => {
					setSuccess(false);
				}, 5000);
			}
		} catch (error) {}
	};
	const deleteProject = async () => {
		try {
			const response = await axios.delete(`${api_url}LFHelp/${projectData.id}`, {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 204) {
			}
		} catch (error) {}
	};
    return (
			<div>
				{!projectData ? (
					'Loading card...'
				) : !editing ? (
					<div>
						<p>Project Name: {projectData.project_name}</p>
						<p>Description: {projectData.description}</p>
						<p>Skills Desired: {projectData.skills_desired}</p>
						<p>Availability Needed: {projectData.availability_desired}</p>
						<p>Timeline: {projectData.timeline}</p>
						<p>Pay Rate: ${projectData.payrate}/hour</p>
						<p>Contact: {projectData.contact}</p>
					</div>
				) : (
					<form>
						<label>Skills:</label>
						<input
							type='text'
							id='skills'
							onChange={handleChange}
							defaultValue={projectData.skills}></input>
						<label>Availability:</label>
						<label>Sunday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='sunday'
							defaultValue={projectData.sunday}></input>
						<label>Monday</label>
						<input type='checkbox' onChange={toggleChange} id='monday'></input>
						<label>Tuesday</label>
						<input type='checkbox' onChange={toggleChange} id='tuesday'></input>
						<label>Wednesday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='wednesday'></input>
						<label>Thursday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='thursday'></input>
						<label>Friday</label>
						<input type='checkbox' onChange={toggleChange} id='friday'></input>
						<label>Saturday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='saturday'></input>
						<label>Payrate:</label>
						<input
							type='number'
							id='payrate_desired'
							onChange={handleChange}
							defaultValue={projectData.payrate}></input>
					</form>
				)}
				{userInfo && projectData ? (
					userInfo.username === projectData.owner ? (
						!editing ? (
							<button onClick={editProject}>Edit Seeker</button>
						) : (
							<div>
								<div>
									<button onClick={updateProject}>Update</button>
									<button onClick={editProject}>Cancel</button>
								</div>
								<div>
									<button onClick={deleteProject}>Delete Seeker</button>
								</div>
							</div>
						)
					) : null
				) : null}
				{success ? (
					<p>You have successfully updated your Seeker Post!</p>
				) : null}
			</div>
		);
}

export default ProjectCardEdit;