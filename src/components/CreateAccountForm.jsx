function CreateAccountForm() {
    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Enter username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Password" />
            </div>
        <button type="submit"> Create Account </button>
        </form>
     );
}

export default CreateAccountForm;
