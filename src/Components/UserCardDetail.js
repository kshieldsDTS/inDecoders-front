import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import URL from '../apiConfig';
import { CircularProgress } from '@mui/material';

function UserCardDetail({ userInfo, loggedIn }) {
	const params = useParams();
	const id = params.id;
	const [userData, setUserData] = useState();
    useEffect(() => {
        const url = `${URL}getusers/${id}`;
        (async () => {
            try {
                const fetchedData = await axios.get(url);
                setUserData(fetchedData.data)
            } catch (error) {}
        })();
    });
	return (
		<div className='detail-wrapper'>
			<div className='user-card-wrapper'>
				{userData ? (
					<div className='user-card'>
						<div className='user-detail'>
							<div className='item'>
								<p className='label'>Username:</p>
								<p className='value'>{userData.username}</p>
							</div>
							<div className='item'>
								<p className='label'>Email:</p>
								<p className='value'>{userData.email}</p>
							</div>
						</div>
						<div className='user-detail'>
							<div className='item'>
								<p className='label'>Skills:</p>
								<p className='value'>{userData.skills}</p>
							</div>
							<div className='item'>
								<p className='label'>About:</p>
								<p className='value'>{userData.bio}</p>
							</div>
							<div className='item'>
								<p className='label'>Portfolio:</p>
								<p className='value'>{userData.portfolio}</p>
							</div>
							<div className='item'>
								<p className='label'>Pay Rate:</p>
								<p className='value'>${userData.payrate} per hour</p>
							</div>
						</div>
					</div>
				) : (
					<div>
						<h2>Please stand by while data is being loaded...</h2>
						<CircularProgress color='secondary' />
					</div>
				)}
			</div>
		</div>
	);
}

export default UserCardDetail;
