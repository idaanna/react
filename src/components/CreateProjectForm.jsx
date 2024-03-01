import { useState } from "react";
import { useNavigate } from "react-router";

import postProject from "../api/post-createproject";

// above takes you to newly created project

function CreateProjectForm() {
    const navigate = useNavigate();

    const [projectData, setProjectData] = useState({
        title: "",
        creator: "",
        description: "",
        goal: null,
        is_open: true,
        date_created: new Date().toISOString(),
        image: "",
    });
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectData((prevprojectData) => ({
            ...prevprojectData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (projectData.title && projectData.description && projectData.goal) {
            postProject(
                projectData,

            // ).then((newproject) => {
            //     // Handle the response if needed
            //     console.log("Project created successfully:", newproject);
            //     // Redirect the user to the project detail page or any desired location
            //     navigate(`/projects/${newproject.id}`);
            ).then((response) => {
                console.log(response);
                navigate("/");

            })
                .catch((error) => {
                    // Handle errors, e.g., show an error message to the user
                    console.error("Error creating project:", error);
                });
            }}
            return (
                <form>
                    <div>
                    <label htmlFor="title"> Project Title: </label>
                    <input 
                        type="text"
                        id="title"
                        placeholder="Project Title"
                        onChange={handleChange}
                    />
                    </div>

                    <div>
                    <label htmlFor="creator"> Project Creator: </label>
                    <input 
                        type="text"
                        id="creator"
                        placeholder="Project Creator"
                        onChange={handleChange}
                    />
                    </div>

                    <div>
                    <label htmlFor="description"> Project Description: </label>
                    <input 
                        type="text"
                        id="description"
                        placeholder="Project Description"
                        onChange={handleChange}
                    />
                    </div>

                    <div>
                    <label htmlFor="image"> Project Image: </label>
                    <input 
                        type="text"
                        id="image"
                        placeholder="Project Image"
                        onChange={handleChange}
                    />
                    </div>

                    <div>
                    <label htmlFor="goal"> Project Goal: </label>
                    <input 
                        type="text"
                        id="goal"
                        placeholder="Project Goal"
                        onChange={handleChange}
                    />
                    </div>

                    <button type="submit" onClick={handleSubmit}>
                    Create Project 
                    </button>
                </form>
            );

        }
    


export default CreateProjectForm;