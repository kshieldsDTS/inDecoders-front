import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectCardEdit(props) {
    const params = useParams()
    const id = params.id
	const [projectData, setProjectData] = useState();
	useEffect(() => {
		const url = `https://indecoders.herokuapp.com/LFHelp/${id}`;
		(async () => {
			try {
				const fetchedData = await axios.get(url)
				setProjectData(fetchedData.data)
			} catch(err) {
				console.error(err)
			}
		})()
	})
    return (
			<div>
				{projectData ? (
					<div>
						<p>Project Name: {projectData.project_name}</p>
						<p>Description: {projectData.description}</p>
						<p>Skills Desired: {projectData.skills_desired}</p>
						<p>Availability Needed: {projectData.availability_desired}</p>
						<p>Timeline: {projectData.timeline}</p>
						<p>Pay Rate: ${projectData.payrate}/hour</p>
						<p>Contact: {projectData.contact}</p>
					</div>
				) : (
					'Loading project...'
				)}
			</div>
		);
}

export default ProjectCardEdit;