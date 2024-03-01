import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

import postPledge from "../api/post-createpledge";


function CreatePledgeForm() {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const { id } = useParams();

    const [pledge, setPledge] = useState({
        amount: null,
        comment: "",
        anonymous:false,
        // is_open: true,
        // date_created: new Date().toISOString(),
        project: id,
        supporter: userId,       
    });
    const handleChange = (event) => {
        console.log(pledge)
        const { id, value } = event.target;
        setPledge((prevPledge) => ({
            ...prevPledge,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const authToken = window.localStorage.getItem("token");
        if (authToken) {
            event.preventDefault();
            console.log(pledge)
            postPledge(pledge).then(response => {
                console.log(response)
                navigate("/")
            });
    //             pledge.amount,
    //             pledge.comment,
    //             // pledge.is_Anonymous,
    //             authToken
    //         ).then((response) => {
    //             console.log(response);
    //             navigate("/");
    //         });
        }
    };
    //     if (pledge.amount && pledge.comment) {
    //         console.log(pledge)
    //         postPledge(
    //             pledge
    //         ).then((newpledge) => {
    //             // Handle the response if needed
    //             console.log("Pledge created successfully:", newpledge);
    //             // Redirect the user to the project detail page or any desired location
    //             navigate(`/pledges`);
    //         })
    //             .catch((error) => {
    //                 // Handle errors, e.g., show an error message to the user
    //                 console.error("Error creating pledge:", error);
    //             });
    //     }    
    // }
            return (
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="amount"> Insert pledge amount: </label>
                    <input 
                        type="number"
                        id="amount"
                        placeholder="Insert pledge amount"
                        onChange={handleChange}
                    />
                    </div>

                    <div>
                    <label htmlFor="comment"> Insert pledge comment: </label>
                    <input 
                        type="text"
                        id="comment"
                        placeholder="Insert pledge comment"
                        onChange={handleChange}
                    />
                    </div>

                    <div>
                    <label htmlFor="is_anonymous">Anonymous</label>
                    <input
                        type="checkbox"
                        id="isAnonymous"
                        value={pledge.anonymous}
                        onChange={handleChange}
                    />
                    </div>

                    <button type="submit">
                        Create Pledge 
                    </button>
                </form>
            );

        }
    


export default CreatePledgeForm;