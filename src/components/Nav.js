import { Link } from "react-router-dom";
import {
    LuLogIn,
    LuLogOut,
    LuMegaphone
} from 'react-icons/lu'

const Nav = ({user, setUser}) => {

    const handleLogin = () => {
        setUser(true)
        console.log(`user: ${user}`)
    }

    const handleLogout = () => {
        setUser(false)
        console.log(`user: ${user}`)
    }

    return (
        <div className="nav">
            <div className="nav-logo">
                <Link to={"/"}>epic cx jobs</Link>
            </div>
            <div className="login">
                <ul className="nav-list">
                    <li className="nav-list-item"><Link to={"/jobs"}>jobs</Link></li>
                    <li className="nav-list-item"><Link to={"/"}>companies</Link></li>
                    <li className="nav-list-item"><Link to={"/"}>blog</Link></li>
                </ul>
                {user && <Link to={"/create"}><LuMegaphone /> post a job</Link>}
                {!user ? <Link to={"/jobs"} onClick={handleLogin}><LuLogIn /> login</Link> : <Link to={"/"} onClick={handleLogout}><LuLogOut /> logout</Link>}
            </div>
        </div>
    );
}
 
export default Nav;