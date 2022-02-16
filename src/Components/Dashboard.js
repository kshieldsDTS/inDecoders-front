import React from 'react';
import { Link } from 'react-router-dom'

function Dashboard({ userInfo, loggedIn }) {
    return (
        <div className='dashboard-wrapper'>
            <div className='dashboard'>
                <div className='greeting'>
                    {userInfo ? 
                    <h1>Welcome back, {userInfo.username}!</h1>
                    :
                    <h1>Welcome to inDecoders!</h1>
                    }
                </div>
            </div>
                {loggedIn ?
                    <div className='dashboard-commands'>
                        <Link to='/createseeker'>
                            <button className='dashboard-seeker'>Create Seeker</button>
                        </Link>
                        <Link to='/createproject'>
                            <button className='dashboard-project'>Create Project</button>
                        </Link>
                    </div> 
                :
                    null
                }
        </div>
    );
}

export default Dashboard;