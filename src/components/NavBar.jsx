import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    return (
           <header>
            <a href="">
                <img src="src\images\logo.png" id="logo"/>
               </a>

            <nav>
            <ul className="menu">
                <Link to="/"> Home  </Link>
                <Link to="/login"> Log In  </Link>
                <Link to="/createaccount"> Create Account  </Link>
                <Link to="/projects"> Create Project  </Link>
            </ul>
            </nav>
            <Outlet />
            </header>
        

        // put footer here if you want one
    );
}

export default NavBar;