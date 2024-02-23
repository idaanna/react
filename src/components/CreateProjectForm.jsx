function CreateProjectForm() {
    return (
        <form>
            <div>
            <label htmlFor="projecttitle"> Project Title: </label>
            <input type="text" id="projecttitle" placeholder="Enter Project Title" />
            </div>
            <div>
            <label htmlFor="projectcreator"> Project Creator: </label>
            <input type="projectcreator" id="projectcreator" placeholder="Enter project creator" />
            </div>
            <div>
            <label htmlFor="description"> Project Description: </label>
            <input type="description" id="description" placeholder="Enter project description" />
            </div>
            <button type="submit">Create Project </button>
            </form>
    );
}

export default CreateProjectForm;