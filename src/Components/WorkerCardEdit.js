import React from 'react';
import { useParams } from 'react-router';

const jobPosts = [
	{
		id: 0,
		name: 'Kurt',
		skills: ['Javascript', 'Python'],
		email: 'kurt@kurt.com',
		availability: '9 to 5',
		payrate: 30,
	},
	{
		id: 1,
		name: 'Bill',
		skills: ['C#', 'Unity'],
		email: 'bill@bill.com',
		availability: '24 hours',
		payrate: 50,
	},
	{
		id: 2,
		name: 'Michel',
		skills: ['Angular', 'Ruby'],
		email: 'Michel@Michel.com',
		availability: 'Sundays only',
		payrate: 40,
	}
];

function WorkerCardEdit(props) {
	const params = useParams()
    function testStuff() {
			console.log(params);
		}
    return (
			<div>
				<p>Name: {jobPosts[0].name}</p>
				<p>Skills: {jobPosts[0].skills.join(' ')}</p>
                <p>Email: {jobPosts[0].email}</p>
                <p>Availability: {jobPosts[0].availability}</p>
                <p>Payrate: ${jobPosts[0].payrate}/hour</p>
				<button onClick={testStuff}>Test The Thing</button>
			</div>
		);
}

export default WorkerCardEdit;