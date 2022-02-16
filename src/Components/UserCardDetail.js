import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../apiConfig';

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
	function test() {
		console.log(userInfo.id, userData.id);
	}
	return (
        <div>
        {userData ? 
        <div>
			<p>Name: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Skills: {userData.skills}</p>
            <p>About: {userData.bio}</p>
            <p>Portfolio: {userData.portfolio}</p>
            <p>Pay: ${userData.payrate}/hour</p>
			<button onClick={test}>Test the Thing</button>
		</div> : <p>Loading... please wait...</p>}
		</div>
	);
}

export default UserCardDetail;
