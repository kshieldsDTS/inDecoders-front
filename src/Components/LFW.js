import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SeekerCard from './SeekerCard';
import axios from 'axios';
import URL from '../apiConfig';
import { CircularProgress } from '@mui/material';

function LFW({ userInfo, loggedIn }) {
	const [displayData, setDisplayData] = useState()
	useEffect(() => {
		const url = `${URL}LFWork`;
		(async () => {
			try {
				const fetchedData = await axios.get(url)
				setDisplayData(fetchedData.data)
			} catch(err){
				console.error(err)
			}
		})()
	}, [])
    return (
			<div>
				{loggedIn ? (
					<Link to='/createseeker'>
						<button className='dashboard-seeker'>Create Seeker Post</button>
					</Link>
				) : null}
				<div className='lfw-board'>
					{displayData ? (
						displayData.map((element, i) => (
							<SeekerCard
								key={i}
								id={element.id}
								name={element.owner}
								skills={element.skills}
								email={element.email}
								payrate={element.payrate_desired}
								sunday={element.sunday}
								monday={element.monday}
								tuesday={element.tuesday}
								wednesday={element.wednesday}
								thursday={element.thursday}
								friday={element.friday}
								saturday={element.saturday}
							/>
						))
					) : (
						<div>
							<h2>Please stand by while data is being loaded...</h2>
							<CircularProgress color='secondary' />
						</div>
					)}
				</div>
			</div>
		);
}

export default LFW;