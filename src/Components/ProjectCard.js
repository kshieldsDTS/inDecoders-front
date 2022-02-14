import React from 'react';
import { Link } from 'react-router-dom'

function ProjectCard(props) {
    return (
			<div>
				<Link to={`/LFH/${props.id}`}>
					<div>
						<p>Project Name: {props.project_name}</p>
						<p>Description: {props.description}</p>
						<p>Skills Desired: {props.skills_desired}</p>
						<p>Availability Desired: {props.availability_desired}</p>
						<p>Timeline: {props.timeline}</p>
						<p>Payrate: ${props.payrate}/hour</p>
						<p>Contact: {props.contact}</p>
					</div>
				</Link>
			</div>
		);
}

export default ProjectCard;