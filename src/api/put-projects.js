async function putProject(title, description, goal, image) {
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const authToken = localStorage.getItem("token");
    const date = new Date().toISOString()
    const response = await fetch(url, {
        method: "PUT", 
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${authToken}`,
        },
        body: JSON.stringify({
            "title": title,
            "description": description,
            "goal": goal,
            "image": image,
        }),
    });
    
    if (!response.ok) {
        const fallbackError = `Error trying to update project`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
        }

        return await response.json();
    }

export default putProject;