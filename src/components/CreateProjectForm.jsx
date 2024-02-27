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
        goal: 0,
        is_open: true,
        date_created: new Date().toISOString(),
        image: "",
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
        if (projectData.title && projectData.description && projectData.goal) {
            postProject(
                projectData
            ).then((newproject) => {
                // Handle the response if needed
                console.log("Project created successfully:", newproject);
                // Redirect the user to the project detail page or any desired location
                navigate(`/project/${newproject.id}`);
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
                        <input type="text" id="title" placeholder="Enter Project Title" />
                    </div>
                    <div>
                        <label htmlFor="creator"> Project Creator: </label>
                        <input type="creator" id="creator" placeholder="Enter project creator" />
                    </div>
                    <div>
                        <label htmlFor="description"> Project Description: </label>
                        <input type="description" id="description" placeholder="Enter project description" />
                    </div>
                    <div>
                        <label htmlFor="image"> Image URL: </label>
                        <input type="text" id="image" placeholder="Enter image URL" />
                    </div>
                    <button type="submit">Create Project </button>
                </form>
            );

        }
    


export default CreateProjectForm;