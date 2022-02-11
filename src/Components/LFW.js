import React from 'react';
import WorkerCard from './WorkerCard';

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

function LFW(props) {
    function testStuff(){
        console.log('hi');
    }
    return (
        <div>
            {jobPosts.map((element, i) => (
                <WorkerCard
                    key={i}
                    id={element.id}
                    name={element.name}
                    skills={element.skills}
                    email={element.email}
                    availability={element.availability}
                    payrate={element.payrate}
                />
            ))}
            {/* <button onClick={testStuff}>Test The Thing</button> */}
        </div> 
    );
    
}

export default LFW;