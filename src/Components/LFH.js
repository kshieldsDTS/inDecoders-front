import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard'
import axios from 'axios';
import URL from '../apiConfig';
import { CircularProgress } from '@mui/material';

function LFH({ userInfo, loggedIn }) {
	const [fetchedProjects, setFetchedProjects] = useState()
	useEffect(() => {
		const url = `${URL}LFHelp/`;
		(async () => {
			try {
				const fetchedData = await axios.get(url)
				setFetchedProjects(fetchedData.data)
			} catch(err){
				console.error(err)
			}
		})()
	}, [])
    return (
		<div className='outer-wrapper'>
			{loggedIn ? (
					<Link to='/createproject'>
						<button className='dashboard-seeker'>Create Project Post</button>
					</Link>
				) : null}
			<div className='lfh-board'>
				{fetchedProjects
					? fetchedProjects.map((element, i) => (
							<ProjectCard
								key={i}
								id={element.id}
								project_name={element.project_name}
								description={element.description}
								skills_desired={element.skills_desired}
								availability_desired={element.availability_desired}
								timeline={element.timeline}
								sunday={element.sunday}
								monday={element.monday}
								tuesday={element.tuesday}
								wednesday={element.wednesday}
								thursday={element.thursday}
								friday={element.friday}
								saturday={element.saturday}
								payrate={element.payrate}
								contact={element.contact}
							/>
					  ))
					: 
						<div>
							<h2>Please stand by while data is being loaded...</h2>
						<CircularProgress color='secondary'/>
						</div>}
			</div>
		</div>
		);
}

export default LFH;