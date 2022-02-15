import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api_url from '../apiConfig';

function SeekerCardEdit({ userInfo, loggedIn }) {
	const navigate = useNavigate()
	const params = useParams()
	const id = params.id
	const [seekerData, setSeekerData] = useState();
	const [editing, setEditing] = useState(false)
	const [newSeekerData, setNewSeekerData] = useState()
	const [success, setSuccess] = useState(false)
	useEffect(() => {
		const url = `${api_url}LFWork/${id}`;
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
			setNewSeekerData({ ...newSeekerData, [ev.target.id]: ev.target.checked });
		}
	function editSeeker(){
		setEditing(!editing)
		setNewSeekerData(seekerData)
	}
	const updateSeeker = async () => {
		try {
			const response = await axios.patch(`${api_url}LFWork/${seekerData.id}`, newSeekerData, {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 200){
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
			const response = await axios.delete(`${api_url}LFWork/${seekerData.id}`, {
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
			<div>
				{!seekerData ? (
					'Loading card...'
				) : !editing ? (
					<div>
						<p>Name: {seekerData.owner}</p>
						<p>Email: {seekerData.email}</p>
						<p>Skills: {seekerData.skills}</p>
						<p>Availability: {seekerData.availability}</p>
						<p>Payrate: ${seekerData.payrate_desired}/hour</p>
					</div>
				) : (
					<form>
						<label>Skills:</label>
						<input
							type='text'
							id='skills'
							onChange={handleChange}
							defaultValue={seekerData.skills}></input>
						<label>Availability:</label>
						<label>Sunday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='sunday'
							defaultChecked={seekerData.sunday}></input>
						<label>Monday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='monday'
							defaultChecked={seekerData.monday}></input>
						<label>Tuesday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='tuesday'
							defaultChecked={seekerData.tuesday}></input>
						<label>Wednesday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='wednesday'
							defaultChecked={seekerData.wednesday}></input>
						<label>Thursday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='thursday'
							defaultChecked={seekerData.thursday}></input>
						<label>Friday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='friday'
							defaultChecked={seekerData.friday}></input>
						<label>Saturday</label>
						<input
							type='checkbox'
							onChange={toggleChange}
							id='saturday'
							defaultChecked={seekerData.saturday}></input>
						<label>Payrate:</label>
						<input
							type='number'
							id='payrate_desired'
							onChange={handleChange}
							defaultValue={seekerData.payrate_desired}></input>
					</form>
				)}
				{userInfo && seekerData && loggedIn ? (
					userInfo.username === seekerData.owner ? (
						!editing ? (
							<button onClick={editSeeker}>Edit Seeker</button>
						) : (
							<div>
								<div>
									<button onClick={updateSeeker}>Update</button>
									<button onClick={editSeeker}>Cancel</button>
								</div>
								<div>
									<button onClick={deleteSeeker}>Delete Seeker</button>
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

export default SeekerCardEdit;