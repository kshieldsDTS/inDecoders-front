import React from 'react';
import { useParams } from 'react-router';

const projectPosts = [
	{
		id: 0,
		projectName: 'AgiliTeam',
		description: 'A Kanban Style workflow management app',
		contacts: ['Kurt'],
		skillsDesired: ['MongoDB', 'Express', 'Mongoose'],
		availabilityDesired: 'M-F 9-5',
		timeline: '1 week',
		payRate: 30,
	},
	{
		id: 1,
		projectName: 'Felp',
		description: 'An alternative to Yelp',
		contacts: ['Frankz'],
		skillsDesired: ['CSS', 'Material UI', 'Sass'],
		availabilityDesired: 'any',
		timeline: '1 week',
		payRate: 35,
	},
	{
		id: 2,
		projectName: 'YogaStarz',
		description: 'A yoga trainer on your phone to keep you focused',
		contacts: ['George', 'Nat'],
		skillsDesired: ['Django', 'Postgres', 'AWS', 'Python'],
		availabilityDesired: 'Saturdays',
		timeline: 'however long it takes',
		payRate: 30,
	},
];

function ProjectCardEdit(props) {
    const params = useParams()
    const id = params.id
    return (
        <div>
            <p>Project Name: {projectPosts[id].projectName}</p>
			<p>Description: {projectPosts[id].description}</p>
			<p>Contacts: {projectPosts[id].contacts.join(' ')}</p>
			<p>Skills Desired: {projectPosts[id].skillsDesired.join(' ')}</p>
			<p>Availability Needed: {projectPosts[id].availabilityDesired}
			</p>
			<p>Timeline: {projectPosts[id].timeline}</p>
			<p>Pay Rate: ${projectPosts[id].payRate}/hour</p>
        </div>
    );
}

export default ProjectCardEdit;