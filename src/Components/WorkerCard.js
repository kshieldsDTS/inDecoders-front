import React from 'react';
import { Link } from 'react-router-dom'

function WorkerCard(props) {
    function testStuff () {
        console.log(props);
    }
    return (
			<div>
                <Link to={`/LFW/${props.id}`} params={'hello'}>
                    <div>
				        <p>Name: {props.name}</p>
                        <p>Skills: {props.skills}</p>
                        <p>Email: {props.email}</p>
                        <p>Availability: {props.availability}</p>
                        <p>Payrate: ${props.payrate}/hour</p>
				        <button onClick={testStuff}>Test The Thing</button>
                    </div>
                </Link>
			</div>
		);
}

export default WorkerCard;