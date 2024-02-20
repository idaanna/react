import { Link, Outlet } from "react-router-dom";

function NavBar () {
    return (
        <div>
            <nav>
                <Link to="/"> Home  </Link>
                <Link to="/login"> Log In  </Link>
                <Link to="/createaccount"> Create Account  </Link>
            </nav>
            <Outlet />
        </div>

        // put header here if you want one
    );
}

export default NavBar;