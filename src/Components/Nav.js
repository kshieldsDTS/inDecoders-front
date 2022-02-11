import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
          <Link to='/'>Home</Link>
          <Link to='/LFW'>LFW</Link>
          <Link to='/LFH'>LFH</Link>
          <Link to='/login'>Login</Link>
          <Link to='/user'>User</Link>
        </div>
    );
}

export default Nav;