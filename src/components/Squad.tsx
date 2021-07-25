import React, { useState } from 'react';
import Player from './Player';

interface IPlayer {
    name: string,
    role: string
}

const Squad = () => {
    const [player, setPlayer] = useState<IPlayer>({} as IPlayer);
    const [playerList, setPlayerList] = useState<IPlayer[]>([]);

    const handleAddPlayer = () => {
        setPlayerList([...playerList, player])
        setPlayer({
            name: "",
            role: ""
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({ ...player, [e.target.name]: e.target.value })
    }

    const handleRemovePlayer= (role: string) => {
        const newPlayerList = playerList.filter(player => player.role !== role)
        setPlayerList(newPlayerList)
    }

    return (
        <div>
            {/* <h1 className="text-center">⛹️ Player List</h1> */}
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

                <button onClick={handleAddPlayer}>Add</button>
            </div>
            {
                playerList.map((player) => <Player key={player.name} name={player.name} role={player.role} handleRemovePlayer={handleRemovePlayer} />)
            }
        </div>
    );
};

export default Squad;