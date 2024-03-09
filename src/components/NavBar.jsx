import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    return (
        <>
           <header>
            <nav className="navbar">
                <Link to="/"> <img src="\images\logo.png" id="logo"/> </Link>
            <ul className="menu">
                
                <Link to="/"> Home  </Link>
                <Link to="/login"> Log In  </Link>
                <Link to="/createaccount"> Create Account  </Link>
                <Link to="/projects"> Create Project  </Link>
            </ul>
            </nav>
            <Outlet />
            </header>
            <footer className="footer">
                <div className="content">
                <h3>
                <a href="https://wasr.org.au/donate/">
                <img src="\images\seabirdrescue2.jpg" id="seabirdlogo"/>
                </a>
                Donate to a real bird rescue
                </h3>
                </div>
            </footer>
        </>

        
    );
}

export default NavBar;