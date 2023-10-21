import { Outlet, Link } from "react-router-dom";

export default function StartGame() {
    return(
        <div className="startgame_container">
            <h1>Hello Today! Let's play </h1>
                <div style={{paddingBottom: 'px'}}>
                <button><Link to="login">Let's Play!</Link></button>
                </div>
        </div>

    )
}