import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

function WorkerCardEdit(props) {
	const params = useParams()
	const id = params.id
	const [workerData, setWorkerData] = useState();
	useEffect(() => {
		const url = `https://indecoders.herokuapp.com/LFWork/${id}`;
		(async () => {
			try {
				const fetchedData = await axios.get(url);
				setWorkerData(fetchedData.data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, [id]);
    return (
			<div>
				{!workerData ? 'Loading user...' :
				<div>
				<p>Name: {workerData.owner}</p>
				<p>Email: {workerData.email}</p>
				<p>Skills: {workerData.skills}</p>
				<p>Availability: {workerData.availability}</p>
				<p>Payrate: ${workerData.payrate_desired}/hour</p>
				</div>
				}
			</div>
		);
}

export default WorkerCardEdit;