async function postPledge(pledgeDetails) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const authToken = localStorage.getItem("token");
    const response = await fetch(url, {
        method: "POST", 
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${authToken}`,
        },
        body: JSON.stringify({
        "amount": pledgeDetails.amount,
        "comment": pledgeDetails.comment,
        "is_anonymous": pledgeDetails.isAnonymous,
        // "project": pledgeDetails.project,
        "project": pledgeDetails.project,
        // "id": pledgeDetails.id,
        }),
    });
    
    if (!response.ok) {
        const fallbackError = `Error trying to create pledge`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
        }

        return await response.json();
    }

export default postPledge;