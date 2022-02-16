import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard'
import axios from 'axios';
import URL from '../apiConfig';

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
			<div>
				{loggedIn ? (
					<Link to='/createproject'>
						<button>Create Project Post</button>
					</Link>
				) : null}
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
					: 'Please wait... Heroku is waking up...'}
			</div>
		);
}

export default LFH;