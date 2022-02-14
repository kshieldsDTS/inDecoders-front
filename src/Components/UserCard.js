import React from 'react';

function UserCard(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Skills: {props.skills}</p>
            <p>Portfolio: {props.portfolio}</p>
            <p>Payrate: ${props.payrate}/hour</p>
        </div>
    );
}

export default UserCard;