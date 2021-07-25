import React, { useState } from 'react';
import Player from './Player';

interface IPlayer {
    name: string,
    role: string,
    jersey: string
}

const Squad = () => {
    const [player, setPlayer] = useState<IPlayer>({} as IPlayer);
    const [playerList, setPlayerList] = useState<IPlayer[]>([]);

    const handleAddPlayer = () => {
        setPlayerList([...playerList, player])
        setPlayer({
            name: "",
            role: "",
            jersey: ""
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({ ...player, [e.target.name]: e.target.value })
    }

    const handleRemovePlayer = (jersey: string) => {
        const newPlayerList = playerList.filter(player => player.jersey !== jersey)
        setPlayerList(newPlayerList)
    }

    return (
        <div>
            <div className="form">
                <input
                    value={player.name}
                    onChange={onChange}
                    type="text"
                    name="name"
                    placeholder="Player Name" />

                <input
                    value={player.role}
                    onChange={onChange}
                    type="text"
                    name="role"
                    placeholder="Player role" />

                <input
                    value={player.jersey}
                    onChange={onChange}
                    type="text"
                    name="jersey"
                    placeholder="Player jersey" />

                <button onClick={handleAddPlayer}>Add</button>
            </div>
            <div className="mt-5">
                {
                    playerList.map((player) => <Player key={player.name} name={player.name} role={player.role} jersey={player.jersey} handleRemovePlayer={handleRemovePlayer} />)
                }
            </div>
        </div>
    );
};

export default Squad;