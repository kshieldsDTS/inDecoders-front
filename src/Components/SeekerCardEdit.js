import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import api_url from '../apiConfig';

function SeekerCardEdit({ userInfo, loggedIn }) {
	const params = useParams()
	const id = params.id
	const [workerData, setWorkerData] = useState();
	const [editing, setEditing] = useState(false)
	const [newUserData, setNewUserData] = useState()
	useEffect(() => {
		const url = `${api_url}LFWork/${id}`;
		(async () => {
			try {
				const fetchedData = await axios.get(url);
				setWorkerData(fetchedData.data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, [id]);
	 function handleChange(ev) {
			setNewUserData({ ...newUserData, [ev.target.id]: ev.target.value });
		}
		function toggleChange(ev) {
			setNewUserData({ ...newUserData, [ev.target.id]: ev.target.checked });
		}
	function editUser(){
		setEditing(!editing)
		setNewUserData(workerData)
	}
	const updateUser = async () => {
		try {
			const response = await axios.put(`${api_url}LFWork/${workerData.id}`, newUserData, {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			console.log(response);
			if (response.status === 201) {
				setWorkerData(response.data)
			}
		} catch (error) {}
	};
    return (
			<div>
				{!workerData ? (
					'Loading card...'
				) : !editing ? (
					<div>
						<p>Name: {workerData.owner}</p>
						<p>Email: {workerData.email}</p>
						<p>Skills: {workerData.skills}</p>
						<p>Availability: {workerData.availability}</p>
						<p>Payrate: ${workerData.payrate_desired}/hour</p>
					</div>
				) : (
					<form>
						<label>Skills:</label>
						<input
							type='text'
							id='skills'
							onChange={handleChange}
							defaultValue={workerData.skills}></input>
						<label>Availability:</label>
						<input
							type='text'
							id='availability'
							onChange={handleChange}
							defaultValue={workerData.availability}></input>
						<label>Payrate:</label>
						<input
							type='number'
							id='payrate'
							onChange={handleChange}
							defaultValue={workerData.payrate}></input>
						<label>Sunday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='sunday'
							defaultValue={workerData.sunday}></input>
						<label>Monday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='monday'
							></input>
						<label>Tuesday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='tuesday'
							></input>
						<label>Wednesday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='wednesday'
							></input>
						<label>Thursday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='thursday'
							></input>
						<label>Friday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='friday'
							></input>
						<label>Saturday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='saturday'
							></input>
					</form>
				)}
				{userInfo && workerData ? (
					userInfo.username === workerData.owner ? (
						!editing ? (
							<button onClick={editUser}>Edit User</button>
						) : (
							<div>
								<button onClick={updateUser}>Update</button>
								<button onClick={editUser}>Cancel</button>
							</div>
						)
					) : null
				) : null}
			</div>
		);
}

export default SeekerCardEdit;