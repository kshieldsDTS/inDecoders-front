import React from 'react';
import { Link } from 'react-router-dom'

function ProjectCard(props) {
    return (
			<div className='project-card-wrapper'>
				<Link to={`/LFH/${props.id}`}>
					<div className='project-card'>
						<div className='project-info'>
							<div className='item'>
								<p className='label'>Project Name:</p>
								<p className='value'>{props.project_name}</p>
							</div>
						</div>
						<div className='project-details'>
							<div className='item'>
								<p className='label'>Description:</p>
								<p className='value'>{props.description}</p>
							</div>
							<div className='item'>
								<p className='label'>Skills Needed:</p>
								<p className='value'>{props.skills_desired}</p>
							</div>
							<div className='item'>
								<p className='label'>Preferred Availability:</p>
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
								<p className='label'>Timeline:</p>
								<p className='value'>{props.timeline}</p>
							</div>
						</div>
						<div className='project-info'>
							<div className='item'>
								<p className='label'>Contact:</p>
								<p className='value'>{props.contact}</p>
							</div>
							<div className='item'>
								<p className='label'>Pay Rate:</p>
								<p className='value'>${props.payrate} per hour</p>
							</div>
								
						</div>
					</div>
				</Link>
			</div>
		);
}

export default ProjectCard;