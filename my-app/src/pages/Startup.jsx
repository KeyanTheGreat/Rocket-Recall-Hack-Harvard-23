import { Outlet, Link } from "react-router-dom";
import './Startup.css'
export default function Startup() {
    return (
        <div className="startup" style={{backgroundColor:'black'}}>
            <p>Play game</p>
            <button><Link to="login">Log in</Link></button>
            <button><Link to="signup">Sign up</Link></button>
            <Outlet />
        </div>
    )
}
