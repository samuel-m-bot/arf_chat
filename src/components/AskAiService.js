const API_ENDPOINT = "https://myaskai.com/api/1.1/wf/ask-ai-query";

const sendQueryToAskAI = async (query, id, apiKey) => {
    if (query.length > 400) {
        throw new Error("Query exceeds 400 characters.");
    }

    const requestBody = {
        id: id,
        api_key: apiKey,
        query: query
    };

    const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        throw new Error("API request failed with status " + response.status);
    }

    return response.json();
};

export default sendQueryToAskAI;
