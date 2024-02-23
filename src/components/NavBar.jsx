import { Link, Outlet } from "react-router-dom";

function NavBar () {
    return (
        <div>
            <nav>
                <Link to="/"> Home  </Link>
                <Link to="/login"> Log In  </Link>
                <Link to="/createaccount"> Create Account  </Link>
                <Link to="/projects"> Create Project  </Link>
            </nav>
            <Outlet />
        </div>

        // put footer here if you want one
    );
}

export default NavBar;