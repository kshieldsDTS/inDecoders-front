import React from 'react';

function Dashboard({ userInfo, loggedIn }) {
    function test(){
        console.log(userInfo);
        console.log(loggedIn);
    }
    return (
        <div>
            {userInfo ? 
                <h1>Welcome back, {userInfo.username}!</h1>
                :
                <h1>Welcome to inDecoders!</h1>
            }
            Create a New Seeker Post
            Create a New Project Post

            Your posts:
            <button onClick={test}>Test</button>
        </div>
    );
}

export default Dashboard;