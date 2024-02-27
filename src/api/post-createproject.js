async function postProject(projectData) {
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const authToken = localStorage.getItem("token");
    const date = new Date().toISOString()
    const response = await fetch(url, {
        method: "POST", // We need to tell the server that we are sending JSON data
    // so we set the Content-Type header to application/json
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${authToken}`,
        },
        body: JSON.stringify({
            ...projectData
        }),
    });
    
    if (!response.ok) {
        const fallbackError = `Error trying to create project`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
        }

        return await response.json();
    }

export default postProject;