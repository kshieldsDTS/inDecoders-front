import React from 'react';
import { Link } from 'react-router-dom'

function ProjectCard(props) {
    function testStuff() {
			console.log(props);
		}
    return (
			<div>
				<Link to={`/LFH/${props.id}`}>
					<div>
						<p>Project Name: {props.projectName}</p>
						<p>Skills Desired: {props.skillsDesired.join(' ')}</p>
						<p>Contacts: {props.contacts.join(' ')}</p>
						<p>Availability Desired: {props.availabilityDesired}</p>
                        <p>Timeline: {props.timeline}</p>
						<p>Payrate: ${props.payrate}/hour</p>
					</div>
				</Link><button onClick={testStuff}>Test Stuff</button>
			</div>
		);
}

export default ProjectCard;