import React from 'react';
import { Link } from 'react-router-dom'

function SeekerCard(props) {
	function test(){
		console.log(props);
	}
    return (
		<div className='seeker-card-wrapper'>
			<Link to={`/LFW/${props.id}`}>
				<div className='seeker-card'>
					<div className='seeker-info'>
						<div className='item'>
							<p className='label'>Name:</p>
							<p className='value'>{props.name}</p>
						</div>
						<div className='item'>
							<p className='label'>Email:</p>
							<p className='value'>{props.email}</p>
						</div>
					</div>
					<div className='work-info'>
						<div className='item'>
							<p className='label'>Skills:</p>
							<p className='value'>{props.skills}</p>
						</div>
						<div className='item'>
							<p className='label'>Availability:</p>
							<div className='days value'>
								<p className={props.sunday ? 'green' : 'gray'}>Sun</p>
								<p className={props.monday ? 'green' : 'gray'}>Mon</p>
								<p className={props.tuesday ? 'green' : 'gray'}>Tue</p>
								<p className={props.wednesday ? 'green' : 'gray'}>Wed</p>
								<p className={props.thursday ? 'green' : 'gray'}>Thu</p>
								<p className={props.friday ? 'green' : 'gray'}>Fri</p>
								<p className={props.saturday ? 'green' : 'gray'}>Sat</p>
							</div>
						</div>	
						<div className='item'>
							<p className='label'>Payrate: </p>
							<p className='value'>${props.payrate} per hour</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default SeekerCard;