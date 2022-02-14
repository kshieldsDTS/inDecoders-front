import React from 'react';
import { Link } from 'react-router-dom'

function WorkerCard(props) {
    return (
			<div>
				<Link to={`/LFW/${props.id}`}>
					<div>
						<p>Name: {props.name}</p>
						<p>Skills: {props.skills}</p>
						<p>Email: {props.email}</p>
						<p>Availability: {props.availability}</p>
						<p>Payrate: ${props.payrate}/hour</p>
					</div>
				</Link>
			</div>
		);
}

export default WorkerCard;