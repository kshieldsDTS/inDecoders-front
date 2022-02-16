import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../apiConfig';
import { CircularProgress } from '@mui/material';

function UserCardDetail({ userInfo, loggedIn }) {
    const navigate = useNavigate();
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
    }, [id, navigate, userInfo.id]);
	return (
		<div className='detail-wrapper'>
			<div className='user-card-wrapper'>
				{userData ? (
					<div className='user-card'>
						<div className='user-info'>
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
								<p className='label'>Availability</p>
								<div className='days value'>
									<p className={userData.sunday ? 'green' : 'gray'}>Sun</p>
									<p className={userData.monday ? 'green' : 'gray'}>Mon</p>
									<p className={userData.tuesday ? 'green' : 'gray'}>Tue</p>
									<p className={userData.wednesday ? 'green' : 'gray'}>Wed</p>
									<p className={userData.thursday ? 'green' : 'gray'}>Thu</p>
									<p className={userData.friday ? 'green' : 'gray'}>Fri</p>
									<p className={userData.saturday ? 'green' : 'gray'}>Sat</p>
								</div>
							</div>
                            <div className='item'>
                                <p className='label'>
                                    Payrate:
                                </p>
                                <p className='value'>
                                    ${userData.payrate} per hour
                                </p>
                            </div>
						</div>
					</div>
				) : (
					<CircularProgress color='secondary' />
				)}
			</div>
		</div>
	);
}

export default UserCardDetail;
