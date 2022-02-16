import React from 'react';

function About(props) {
    return (
        <div className='about-wrapper'>
            <h1>What is inDecoders?</h1>
            <p>inDecoders is a software development market board, where software engineers can post availability for contract work, or project managers can post looking for extra hands to help with their projects and apps.</p>
            <h2>How does it work?</h2>
            <p>Software engineers looking for work can create Seeker Posts, indicating that they are available and looking for work. Each Seeker Post indicates the skills an engineer is willing or able to use, their daily availability, and the payrate that they desire for the work they perform.</p>
            <p>Project managers looking for extra hands on their work can post a Project to the board. Job seekers can browse open projects and contact the managers for each if they are interested in helping. The project manager can review potential seekers and reach out to them as needed.</p>
            <h2>How do I get started?</h2>
            <p>It's easy! Simply make an account, starting at the menu on the top right. Once you have an account, you can make Seeker Posts and Project Posts to get your information out there. For Seekers, it is highly recommended that you add a portfolio link to your profile, as it will allow potential employers a way to see the quality of your work.</p>
            <p>Project managers will want to be as descriptive as possible with their Project posts, so Seekers can easily understand the scope and the possible time commitment a project will require.</p>
        </div>
    );
}

export default About;