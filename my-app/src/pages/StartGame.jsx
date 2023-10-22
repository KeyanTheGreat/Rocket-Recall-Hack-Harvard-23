import React, { Outlet, Link } from 'react-router-dom';

export default function StartGame() {
    return (
        <div className="startgame">
            <h1>Hello Today! Let's play </h1>
                <div style={{paddingBottom: '10px'}}>
                <button><Link to="SageStart">Let's Start!</Link></button>
                <Outlet />
                </div>
        </div>

    )
}