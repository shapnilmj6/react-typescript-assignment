import React from 'react';
import './Player.css';

interface IProps {
    name: string,
    role: string,
    jersey: string,
    handleRemovePlayer: (jersey: string) => void
}

const Player = ({ name, role, jersey = "N/A", handleRemovePlayer }: IProps) => {
    return (
        <div className="player">
            <div className="details">
                <h5>Name: {name}</h5>
                <p>Role: {role}</p>
                <p> Unique Jersey Number: {jersey}</p>
                <button onClick={() => handleRemovePlayer(jersey)}>Remove</button>
            </div>
        </div>
    );
};

export default Player;