import React from 'react';
import ProjectCard from './ProjectCard'
import { useEffect, useState } from 'react'
import axios from 'axios';
import api_url from '../apiConfig';

function LFH(props) {
	const [fetchedProjects, setFetchedProjects] = useState()
	useEffect(() => {
		const url = `${api_url}LFHelp/`;
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
				{fetchedProjects ? 
					fetchedProjects.map((element, i) => (
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
					)) : 'Please wait... Heroku is waking up...'}
			</div>
		);
}

export default LFH;