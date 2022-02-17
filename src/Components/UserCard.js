import React from 'react';
import { Link } from 'react-router-dom';

function UserCard(props) {
    return (
			<div className='user-card-wrapper'>
				<Link to={`${props.id}`}>
					<div className='user-card'>
						<div className='user-info'>
							<div className='item'>
								<p className='label'>Username:</p>
								<p className='value'>{props.name}</p>
							</div>
							<div className='item'>
								<p className='label'>Email:</p>
								<p className='value'>{props.email}</p>
							</div>
						</div>
						<div className='user-detail'>
							<div className='item'>
								<p className='label'>Skills:</p>
								<p className='value'>{props.skills}</p>
							</div>
                            <div className='item'>
                                <p className='label'>Payrate:</p>
                                <p className='value'>${props.payrate} per hour</p>
                            </div>
						</div>
					</div>
				</Link>
			</div>
		);
}

export default UserCard;