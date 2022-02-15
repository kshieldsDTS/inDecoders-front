import React from 'react';

function Main({ userInfo }) {
    function test(){
        console.log(userInfo);
    }
    return (
        <div>
            {userInfo ? 
                <h1>Welcome back, {userInfo.username}!</h1>
                :
                <h1>Welcome to inDecoders!</h1>
            }
            <button onClick={test}>Test</button>
        </div>
    );
}

export default Main;