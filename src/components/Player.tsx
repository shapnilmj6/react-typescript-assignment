import React from 'react';

interface IProps {
    name: string,
    role: string,
    handleRemovePlayer: (role: string) => void
}

const Player = ({ name, role = "N/A", handleRemovePlayer }: IProps) => {
    return (
        <div className="card">
            <p>
                <strong>Name: </strong>{name}
            </p>
            <p>
                <strong>Role: </strong>{role}
            </p>
            <button onClick={() => handleRemovePlayer(role)}>Remove</button>
        </div>
    );
};

export default Player;