import { useState } from "react";
import { useNavigate } from "react-router";

import postPledge from "../api/post-createpledge";


function CreatePledgeForm() {
    const navigate = useNavigate();

    const [projectData, setProjectData] = useState({
        amount: 0,
        comment: "",
        is_open: true,
        date_created: new Date().toISOString(),
        project: "",
        supporter:"",
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
        if (projectData.amount && projectData.comment) {
            postPledge(
                projectData
            ).then((newpledge) => {
                // Handle the response if needed
                console.log("Pledge created successfully:", newproject);
                // Redirect the user to the project detail page or any desired location
                navigate(`/project/${newproject.id}`);
            })
                .catch((error) => {
                    // Handle errors, e.g., show an error message to the user
                    console.error("Error creating pledge:", error);
                });
            }}
            return (
                <form>
                    <div>
                        <label htmlFor="amount"> Amount: </label>
                        <input type="number" id="amount" placeholder="Enter Amount to pledge" />
                    </div>
                    <div>
                        <label htmlFor="comment"> Comment: </label>
                        <input type="comment" id="comment" placeholder="Enter pledge comment" />
                    </div>
                    <div>
                    <label htmlFor="is_anonymous">Anonymous</label>
                    <input
                        type="checkbox"
                        id="isAnonymous"
                        value={pledge.isAnonymous}
                        onChange={handleChange}
                    />
                    </div>

                    <button type="submit">Create Pledge </button>
                </form>
            );

        }
    


export default CreatePledgeForm;