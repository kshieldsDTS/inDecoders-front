import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../apiConfig';
import { CircularProgress } from '@mui/material';

function ProjectCardDetail({ userInfo, loggedIn}) {
	const navigate = useNavigate()
    const params = useParams()
    const id = params.id
	const [projectData, setProjectData] = useState();
	const [editing, setEditing] = useState(false);
	const [newProjectData, setNewProjectData] = useState();
	const [success, setSuccess] = useState(false);
	useEffect(() => {
		const url = `${URL}LFHelp/${id}`;
		(async () => {
			try {
				const fetchedData = await axios.get(url)
				setProjectData(fetchedData.data)
			} catch(err) {}
		})()
	}, [id])
	function handleChange(ev) {
		setNewProjectData({ ...newProjectData, [ev.target.id]: ev.target.value });
	}
	function toggleChange(ev) {
		setNewProjectData({ ...newProjectData, [ev.target.id]: !newProjectData[ev.target.id] });
	}
	function editProject() {
		setEditing(!editing);
		setNewProjectData(projectData);
	}
	const updateProject = async () => {
		try {
			const response = await axios.patch(
				`${URL}LFHelp/${projectData.id}`,
				newProjectData,
				{
					headers: {
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			);
			if (response.status === 200) {
				setProjectData(response.data)
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
			const response = await axios.delete(`${URL}LFHelp/${projectData.id}`, {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 204) {
				navigate('/lfh')
			}
		} catch (error) {}
	};
    return (
			<div className='detail-wrapper'>
				<div className='project-card-wrapper'>
					{!projectData ? (
						<div>
							<h2>Please stand by while data is being loaded...</h2>
							<CircularProgress color='secondary' />
						</div>
					) : (
						<div className='project-card'>
							<div className='project-info'>
								<div className='item'>
									<p className='label'>Project Name:</p>
									{!editing ? (
										<p className='value'>{projectData.project_name}</p>
									) : (
										<input
											type='text'
											id='project_name'
											className='edit'
											onChange={handleChange}
											defaultValue={projectData.project_name}></input>
									)}
								</div>
							</div>
							<div className='project-details'>
								<div className='item'>
									<p className='label'>Description:</p>
									{!editing ? (
										<p className='value'>{projectData.description}</p>
									) : (
										<textarea
											rows='5'
											cols='40'
											id='description'
											className='edit'
											onChange={handleChange}
											defaultValue={projectData.description}></textarea>
									)}
								</div>
								<div className='item'>
									<p className='label'>Preferred Availability:</p>
									{!editing ? (
										<div className='days value'>
											<p className={projectData.sunday ? 'green' : 'gray'}>
												Sun
											</p>
											<p className={projectData.monday ? 'green' : 'gray'}>
												Mon
											</p>
											<p className={projectData.tuesday ? 'green' : 'gray'}>
												Tue
											</p>
											<p className={projectData.wednesday ? 'green' : 'gray'}>
												Wed
											</p>
											<p className={projectData.thursday ? 'green' : 'gray'}>
												Thu
											</p>
											<p className={projectData.friday ? 'green' : 'gray'}>
												Fri
											</p>
											<p className={projectData.saturday ? 'green' : 'gray'}>
												Sat
											</p>
										</div>
									) : (
										<div className='days value-edit'>
											<p
												onClick={toggleChange}
												id='sunday'
												className={newProjectData.sunday ? 'green' : 'gray'}>
												Sun
											</p>
											<p
												onClick={toggleChange}
												id='monday'
												className={newProjectData.monday ? 'green' : 'gray'}>
												Mon
											</p>
											<p
												onClick={toggleChange}
												id='tuesday'
												className={newProjectData.tuesday ? 'green' : 'gray'}>
												Tue
											</p>
											<p
												onClick={toggleChange}
												id='wednesday'
												className={newProjectData.wednesday ? 'green' : 'gray'}>
												Wed
											</p>
											<p
												onClick={toggleChange}
												id='thursday'
												className={newProjectData.thursday ? 'green' : 'gray'}>
												Thu
											</p>
											<p
												onClick={toggleChange}
												id='friday'
												className={newProjectData.friday ? 'green' : 'gray'}>
												Fri
											</p>
											<p
												onClick={toggleChange}
												id='saturday'
												className={newProjectData.saturday ? 'green' : 'gray'}>
												Sat
											</p>
										</div>
									)}
								</div>
								<div className='item'>
									<p className='label'>Timeline:</p>
									{!editing ? (
										<p className='value'>{projectData.timeline}</p>
									) : (
										<input
											type='text'
											id='timeline'
											className='edit'
											onChange={handleChange}
											defaultValue={projectData.timeline}></input>
									)}
								</div>
							</div>
							<div className='project-info'>
								<div className='item'>
									<p className='label'>Contact:</p>
									<p className='value'>{projectData.contact}</p>
								</div>
								<div className='item'>
									<p className='label'>Pay Rate:</p>
									{!editing ? (
										<p className='value'>${projectData.payrate} per hour</p>
									) : (
										<input
											type='text'
											id='payrate'
											className='edit'
											onChange={handleChange}
											defaultValue={projectData.payrate}></input>
									)}
								</div>
							</div>
						</div>
					)}
					{loggedIn && userInfo && projectData ? (
						userInfo.username === projectData.owner ? (
							!editing ? (
								<div className='single-container'>
									<button className='dashboard-seeker' onClick={editProject}>
										Edit Seeker
									</button>
								</div>
							) : (
								<div className='button-container'>
									<div className='safe-buttons'>
										<button
											className='dashboard-seeker submit-button'
											onClick={updateProject}>
											Update
										</button>
										<button
											className='dashboard-seeker cancel-button'
											onClick={editProject}>
											Cancel
										</button>
									</div>
									<div className='danger-button'>
										<button
											className='dashboard-seeker delete-button'
											onClick={deleteProject}>
											Delete Seeker
										</button>
									</div>
								</div>
							)
						) : null
					) : null}
				</div>
				{success ? (
					<p className='success'>
						You have successfully updated your Project Card!
					</p>
				) : null}
			</div>
		);
}

export default ProjectCardDetail;