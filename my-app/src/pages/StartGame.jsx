import React, { Outlet, Link } from 'react-router-dom';
import "./StartGame.css";

export default function StartGame() {
    return (
        <div className="startgame" style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Hello Today! Let's Play </h1>
                <div style={{paddingBottom: '10px'}}>
                <button><Link to="SageStart">Let's Start!</Link></button>
                <Outlet />
                </div>
        </div>

    )
}