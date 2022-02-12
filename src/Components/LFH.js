import React from 'react';
import ProjectCard from './ProjectCard'

const projectPosts = [
	{
		id: 0,
		projectName: 'AgiliTeam',
		description: 'A Kanban Style workflow management app',
		contacts: [
            'Kurt',
        ],
		skillsDesired: ['MongoDB', 'Express', 'Mongoose'],
		availabilityDesired: 'M-F 9-5',
		timeline: '1 week',
		payRate: 30,
	},
	{
		id: 1,
		projectName: 'Felp',
		description: 'An alternative to Yelp',
		contacts: [
            'Frankz',
        ],
		skillsDesired: ['CSS', 'Material UI', 'Sass'],
		availabilityDesired: 'any',
		timeline: '1 week',
		payRate: 35,
	},
	{
		id: 2,
		projectName: 'YogaStarz',
		description: 'A yoga trainer on your phone to keep you focused',
		contacts: [
            'George',
            'Nat'
        ],
		skillsDesired: ['Django', 'Postgres', 'AWS', 'Python'],
		availabilityDesired: 'Saturdays',
		timeline: 'however long it takes',
		payRate: 30,
	},
];
function LFH(props) {
    return (
			<div>
				{projectPosts.map((element, i) => (
					<ProjectCard
						key={i}
						id={element.id}
						projectName={element.projectName}
						skillsDesired={element.skillsDesired}
						contacts={element.contacts}
						availabilityDesired={element.availabilityDesired}
                        timeline={element.timeline}
						payrate={element.payRate}
					/>
				))}
			</div>
		);
}

export default LFH;