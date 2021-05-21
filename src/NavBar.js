import {Link} from 'react-router-dom'

const NavBar = () => {
    return ( 
    <div className="navbar">
        <Link to="/">Stopwatches</Link>
        <Link to="/about">About</Link>

    </div> 
    );
}
 
export default NavBar;