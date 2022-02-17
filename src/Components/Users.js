import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard'
import URL from '../apiConfig';
import { CircularProgress } from '@mui/material'

function User(props) {
    const [fetchedUsers, setFetchedUsers] = useState()
    useEffect(() => {
        const url = `${URL}getusers`;
        (async () => {
            try {
                const fetchedData = await axios.get(url)
                setFetchedUsers(fetchedData.data)
            } catch(err) {
                console.error(err)
            }
        })()
    }, [])
    return (
			<div className='outer-user-wrapper'>
				{fetchedUsers ? (
					fetchedUsers.map((user, i) => (
						<UserCard
							key={i}
							id={user.id}
							name={user.username}
							email={user.email}
							skills={user.skills}
							portfolio={user.portfolio}
							bio={user.bio}
							payrate={user.payrate}
							sunday={user.sunday}
							monday={user.monday}
							tuesday={user.tuesday}
							wednesday={user.wednesday}
							thursday={user.thursday}
							friday={user.friday}
							saturday={user.saturday}
						/>
					))
				) : (
					<div>
						<h2>Please stand by while data is being loaded...</h2>
						<CircularProgress color='secondary' />
					</div>
				)}
			</div>
		);
}

export default User;