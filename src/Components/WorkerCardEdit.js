import React from 'react';

const jobPosts = [
	{
		id: 0,
		name: 'Kurt',
		skills: [
            'Javascript', 
            'Python'
        ],
		email: 'kurt@kurt.com',
		availability: '9 to 5',
		payrate: 30,
	}
];

function WorkerCardEdit(props) {
    function testStuff() {
			console.log(jobPosts);
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