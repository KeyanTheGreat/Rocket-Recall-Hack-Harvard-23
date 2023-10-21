import { Outlet, Link } from "react-router-dom";
export default function Startup() {
    return (
        <div>
            <p>Play game</p>
            <button><Link to="login">Log in</Link></button>
            <button>Sign up</button>
            <Outlet />
        </div>
    )
}
