import { useState } from "react";
import { useNavigate } from "react-router-dom"

import postCreateAccount from "../api/post-createaccount";

function CreateAccountForm() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email: "",
        });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

     const handleSubmit = (event) => {
         event.preventDefault();
         if (credentials.username && credentials.password && credentials.email) {
            postCreateAccount(
                credentials.email,
                credentials.username,
                credentials.password,
                
            ).then((response) => {
                console.log(response);
                navigate("/");
            });
         }
    };

    return (
        <form >
            <div>
                <label htmlFor="email"> Insert email address: </label>
                <input 
                    type="text"
                    id="email"
                    placeholder="Insert email adress"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="username"> Create Username: </label>
                <input 
                    type="text"
                    id="username"
                    placeholder="Create username"
                    onChange={handleChange}
                />
                    
            </div>
            <div>
                <label htmlFor="password">Create Password: </label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    />
                    
            </div>
            <button type="submit" onClick={handleSubmit}>
                Create Account 
            </button>
        </form>
     );
}

export default CreateAccountForm;
