import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    return (
        <>
           <header>
            <a href="">
                <img src="\images\logo.png" id="logo"/>
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
            <footer>
                <h3>
                <a href="https://wasr.org.au/donate/">
                <img src="\images\seabirdrescue.jpg" id="seabirdlogo"/>
                </a>
                Please consider donating to a real bird rescue like Western Australian Seabird Rescue who does outstanding work
                </h3>
            </footer>
        </>

        
    );
}

export default NavBar;