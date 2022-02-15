import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import api_url from '../apiConfig';

function WorkerCardEdit(props) {
	const params = useParams()
	const id = params.id
	const [workerData, setWorkerData] = useState();
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
    return (
			<div>
				{!workerData ? 'Loading user...' 
					:
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