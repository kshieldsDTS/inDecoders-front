import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import api_url from '../apiConfig';

function WorkerCardEdit({ userInfo, loggedIn }) {
	const params = useParams()
	const id = params.id
	const [workerData, setWorkerData] = useState();
	const [editing, setEditing] = useState(false)
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
	function test(){
		console.log(userInfo, loggedIn);
	}
	function editUser(){
		setEditing(!editing)
	}
	function updateUser(){
		
	}
    return (
			<div>
				{!workerData ? 'Loading card...' 
					:
					<div>
						<p>Name: {workerData.owner}</p>
						<p>Email: {workerData.email}</p>
						<p>Skills: {workerData.skills}</p>
						<p>Availability: {workerData.availability}</p>
						<p>Payrate: ${workerData.payrate_desired}/hour</p>
					</div>
				}
				{userInfo && workerData ? 
				userInfo.username === workerData.owner ? 
				!editing ? 
				<button onClick={editUser}>Edit User</button> :
				<div>
				<button onClick={updateUser}>Update</button> 
				<button onClick={editUser}>Cancel</button>
				</div> : 
				null : 
				null}
				<button onClick={test}>Test</button>
			</div>
		);
}

export default WorkerCardEdit;