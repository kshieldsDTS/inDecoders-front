import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../apiConfig';
import { CircularProgress } from '@mui/material';

function SeekerCardDetail({ userInfo, loggedIn }) {
	const navigate = useNavigate()
	const params = useParams()
	const id = params.id
	const [seekerData, setSeekerData] = useState();
	const [editing, setEditing] = useState(false)
	const [newSeekerData, setNewSeekerData] = useState()
	const [success, setSuccess] = useState(false)
	useEffect(() => {
		const url = `${URL}LFWork/${id}`;
		(async () => {
			try {
				const fetchedData = await axios.get(url);
				setSeekerData(fetchedData.data);
			} catch (err) {}
		})();
	});
	 function handleChange(ev) {
			setNewSeekerData({ ...newSeekerData, [ev.target.id]: ev.target.value });
		}
		function toggleChange(ev) {
			setNewSeekerData({ ...newSeekerData, [ev.target.id]: !newSeekerData[ev.target.id]});
		}
	function editSeeker(){
		setEditing(!editing)
		setNewSeekerData(seekerData)
	}
	const updateSeeker = async () => {
		try {
			const response = await axios.patch(`${URL}LFWork/${seekerData.id}`, newSeekerData, {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 200){
				setSeekerData(response.data)
				setEditing(false)
				setSuccess(true)
				setTimeout(() => {
					setSuccess(false)
				}, 5000);
			}
		} catch (error) {}
	};
	const deleteSeeker = async () => {
		try {
			const response = await axios.delete(`${URL}LFWork/${seekerData.id}`, {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 204) {
				navigate('/lfw')
			}
		} catch (error) {}
	}
    return (
			<div className='detail-wrapper'>
				<div className='seeker-card-wrapper'>
					{!seekerData ? (
						<CircularProgress color='secondary' />
					) : (
						<div className='seeker-card'>
							<div className='seeker-info'>
								<div className='item'>
									<p className='label'>Name:</p>
									<p className='value'>{seekerData.owner}</p>
								</div>
								<div className='item'>
									<p className='label'>Email:</p>
									<p className='value'>{seekerData.email}</p>
								</div>
							</div>
							<div className='work-info'>
								<div className='item'>
									<p className='label'>Skills:</p>
									{!editing ? (
										<p className='value'>{seekerData.skills}</p>
									) : (
										<input
											className='edit'
											type='text'
											id='skills'
											onChange={handleChange}
											defaultValue={seekerData.skills}></input>
									)}
								</div>
							</div>
							<div className='item'>
								<p className='label'>Availability:</p>
								{!editing ? (
									<div className='days value'>
										<p className={seekerData.sunday ? 'green' : 'gray'}>Sun</p>
										<p className={seekerData.monday ? 'green' : 'gray'}>Mon</p>
										<p className={seekerData.tuesday ? 'green' : 'gray'}>Tue</p>
										<p className={seekerData.wednesday ? 'green' : 'gray'}>
											Wed
										</p>
										<p className={seekerData.thursday ? 'green' : 'gray'}>
											Thu
										</p>
										<p className={seekerData.friday ? 'green' : 'gray'}>Fri</p>
										<p className={seekerData.saturday ? 'green' : 'gray'}>
											Sat
										</p>
									</div>
								) : (
									<div className='days value-edit'>
										<p onClick={toggleChange} id='sunday' className={newSeekerData.sunday ? 'green' : 'gray'}>
											Sun
										</p>
										<p onClick={toggleChange}id='monday' className={newSeekerData.monday ? 'green' : 'gray'}>
											Mon
										</p>
										<p onClick={toggleChange}id='tuesday' className={newSeekerData.tuesday ? 'green' : 'gray'}>
											Tue
										</p>
										<p onClick={toggleChange}id='wednesday' className={newSeekerData.wednesday ? 'green' : 'gray'}>
											Wed
										</p>
										<p onClick={toggleChange}id='thursday' className={newSeekerData.thursday ? 'green' : 'gray'}>
											Thu
										</p>
										<p onClick={toggleChange}id='friday' className={newSeekerData.friday ? 'green' : 'gray'}>
											Fri
										</p>
										<p onClick={toggleChange}id='saturday' className={newSeekerData.saturday ? 'green' : 'gray'}>
											Sat
										</p>
									</div>
								)}
							</div>
							<div className='item'>
								<p className='label'>Payrate:</p>
								{editing ? (
									<input
										className='edit'
										type='text'
										id='payrate_desired'
										onChange={handleChange}
										defaultValue={seekerData.payrate_desired}></input>
								) : (
									<p className='value'>
										${seekerData.payrate_desired} per hour
									</p>
								)}
							</div>
						</div>
					)}
					{loggedIn && userInfo && seekerData ? (
						userInfo.username === seekerData.owner ? (
							!editing ? (
								<div className='single-container'>
									<button className='edit edit-button' onClick={editSeeker}>Edit Seeker</button>
								</div>
								
							) : (
								<div className='button-container'>
									<div className='safe-buttons'>
										<button className='edit submit-button' onClick={updateSeeker}>
											Update
										</button>
										<button className='edit cancel-button' onClick={editSeeker}>Cancel</button>
									</div>
									<div className='danger-button'>
										<button className='edit delete-button' onClick={deleteSeeker}>Delete Seeker</button>
									</div>
								</div>
							)
						) : null
					) : null}
				</div>
				{success ? <p className='success'>You have successfully updated your Seeker Card!</p> : null}
			</div>
		);
}

export default SeekerCardDetail;