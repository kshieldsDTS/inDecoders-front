# inDesign

### Current Status:
#### In Development

### About inDesign
	
inDesign is a job board for video game developers, coders, animators, and designers. Users looking for work can post their skills and areas of strength, as well as list their previous works, and, of course, pay rate. Project managers will also be able to post availability for work on their projects, as well as specifying the desired skills, availability, and pay rate.

### Front-End:
HTML, CSS, JavaScript, React, Material UI

### Back-End:
Python, Django, Postgres, AWS S3

# Models:
### LFW(Looking for work)
Name (linked to LFWUsers Model)
Contact Information (linked to Users Model)
Skills, Languages (linked to Users Model)
Previous Works (linked to Users Model)
Availability
Pay rate

### LFH(Looking for help)
Name (linked to Users model)
Contact Information (linked to Users model)
Project outline and scope
Desired skills and languages
Desired availability
Pay rate

### Users
Name 
Contacts Information
Skills for LFW
Previous Works for LFW (links to deployed apps or GitHub repos)
Password
		
## React Component Heirarchy
<img width="943" alt="Screen Shot 2022-02-11 at 11 37 32 AM" src="https://user-images.githubusercontent.com/94239332/153631480-07c6fa9c-138c-47cc-b6e4-86cc3702a3cb.png">
## Wireframes 
<img width="300" alt="Screen Shot 2022-02-11 at 11 07 41 AM" src="https://user-images.githubusercontent.com/94239332/153628923-4c46ee20-777d-4370-8d4d-3438ec2397a4.png">
<img width="296" alt="Screen Shot 2022-02-11 at 11 07 31 AM" src="https://user-images.githubusercontent.com/94239332/153628936-8b34ce97-ec4a-4b2e-912c-795cd82e5bce.png">

## User Stories 
As a job seeker, I want to be able to post my availability, skills, and pay rate to look for work.
As a job seeker, I want to be able to post my previous works and portfolio.
As a developer, I want to be able to post my projects and look for help based on specific availability and desired skills.
As a user, I want to be able to log in and create a profile to save my information to make posting easier.
As a user, I want to be the only person able to edit or delete my posts.

## Stretch Goals
As a job seeker, I want to be able to filter available jobs by skills or pay rate.
As a developer, I want to be able to filter available help by skills or pay rate.
As a user, I would like to automatically be emailed by the system on behalf of the developer or job seeker.
