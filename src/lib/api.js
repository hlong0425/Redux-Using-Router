const FIREBASE_DOMAIN = 'https://react-http-dc150-default-rtdb.firebaseio.com/';

const addQuote = async function (quoteData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
        method: 'POST',
        body: JSON.stringify(quoteData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create quote.');
    }

    return null;
}

const getAllQuotes = async function () {
    const response = await fetch(FIREBASE_DOMAIN + '/quotes.json');
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes.');
    }

    const transformQuotes = [];
    for (let key in data) {
        transformQuotes.push({
            id: key,
            ...data[key],
        })
    }

    return transformQuotes;
}

const getSingleQuote = async function (quoteId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);

    if (!response.ok) {
        throw new Error(response.statusText || 'Could not fetch quotes.');
    }
    const data = await response.json();

    if (data === null) {
        return null
    }

    const loadedQuote = {
        id: quoteId,
        ...data,
    }

    return loadedQuote;
}

const addComment = async function (requestData) {
    console.log(requestData.quoteId);
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
        method: 'POST',
        body: JSON.stringify(requestData.commentData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not add comments.');
    }

    return {}
}

const getAllComments = async function (quoteId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not get comments');
    }

    const transformedComments = [];

    for (let key in data) {
        transformedComments.push({
            id: key, ...data[key],
        })
    }

    return transformedComments;
}

export {
    getAllQuotes,
    getSingleQuote,
    addComment,
    getAllComments,
    addQuote
}