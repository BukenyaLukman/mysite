import {Link} from 'react-router-dom';
import { useState } from "react";


const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)


    return <div>
            <header id="header" className="page-header">
                <div className="title">
                    <h1>Bukenya Lukman</h1>
                <div className="slogan">Code . Eat . Sleep . Repeat</div>
                </div>
            </header>
            <nav className="menu" id="main-menu">
                <button className="menu-toggle" id="toggle-menu" onClick={() => {
                    setNavbarOpen(!navbarOpen)
                }}>
                        toggle menu
                </button>
                {/* menu-dropdown */}
                <div className={
                    navbarOpen ? "menu-dropdown is-open" : "menu-dropdown"
                }>
                    <ul className="nav-menu">
                        <li><Link to="/">Projects</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">ContactMe</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
            </nav>
    </div>
        
}

export default Navbar;