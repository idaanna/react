import { useState } from "react";
import { useNavigate } from "react-router";

import postPledge from "../api/post-createpledge";


function CreatePledgeForm() {
    const navigate = useNavigate();

    const [pledgeData, setPledgeData] = useState({
        amount: 0,
        comment: "",
        is_open: true,
        date_created: new Date().toISOString(),
        project: "",
        supporter:"",
    });
    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (pledgeData.amount && pledgeData.comment) {
            postPledge(
                pledgeData
            ).then((newpledge) => {
                // Handle the response if needed
                console.log("Pledge created successfully:", newproject);
                // Redirect the user to the project detail page or any desired location
                navigate(`/pledges`);
            })
                .catch((error) => {
                    // Handle errors, e.g., show an error message to the user
                    console.error("Error creating pledge:", error);
                });
            }}
            return (
                <form>
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
                        value={pledge.isAnonymous}
                        onChange={handleChange}
                    />
                    </div>

                    <button type="submit" onClick={handleSubmit}>
                        Create Pledge 
                    </button>
                </form>
            );

        }
    


export default CreatePledgeForm;