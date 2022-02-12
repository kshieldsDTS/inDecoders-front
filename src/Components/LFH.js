import React from 'react';

const projectPosts = [
	{
		projectName: 'AgiliTeam',
		description: 'A Kanban Style workflow management app',
		contacts: 'Kurt',
		skillsDesired: ['MongoDB', 'Express', 'Mongoose'],
		availabilityDesired: 'M-F 9-5',
		timeline: '1 week',
		payRate: 30,
	},
	{
		projectName: 'Felp',
		description: 'An alternative to Yelp',
		contacts: 'Frankz',
		skillsDesired: ['CSS', 'Material UI', 'Sass'],
		availabilityDesired: 'any',
		timeline: '1 week',
		payRate: 35,
	},
	{
		projectName: 'YogaStarz',
		description: 'A yoga trainer on your phone to keep you focused',
		contacts: 'George',
		skillsDesired: ['Django', 'Postgres', 'AWS', 'Python'],
		availabilityDesired: 'Saturdays',
		timeline: 'however long it takes',
		payRate: 30,
	},
];
function LFH(props) {
    return (
        <div>
            Hello from LFH!
        </div>
    );
}

export default LFH;