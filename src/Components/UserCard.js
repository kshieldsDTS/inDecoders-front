import React from 'react';
import { Link } from 'react-router-dom';

function UserCard(props) {
    return (
        <Link to={`${props.id}`}>
        <div>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Skills: {props.skills}</p>
            <p>Portfolio: {props.portfolio}</p>
            <p>Payrate: ${props.payrate}/hour</p>
        </div>
        </Link>
    );
}

export default UserCard;