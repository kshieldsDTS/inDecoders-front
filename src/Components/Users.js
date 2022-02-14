import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard'
import api_url from '../apiConfig';

function User(props) {
    const [fetchedUsers, setFetchedUsers] = useState()
    useEffect(() => {
        const url = `${api_url}getusers`;
        (async () => {
            try {
                const fetchedData = await axios.get(url)
                setFetchedUsers(fetchedData.data)
            } catch(err) {
                console.error(err)
            }
        })()
    }, [])
    function test(){
        console.log(fetchedUsers);
    }
    return (
        <div>
            {fetchedUsers ?
                fetchedUsers.map((user, i) => (
                    <UserCard
							key={i}
							id={user.id}
							name={user.username}
                            email={user.email}
                            skills={user.skills}
                            portfolio={user.portfolio}
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
                :
                'Please wait... Heroku is waking up...'
            }
            <button onClick={test}>TEST THE THING</button>
        </div>
    );
}

export default User;