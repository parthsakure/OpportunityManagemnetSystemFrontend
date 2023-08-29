async function postOpportunity(url, data)
{
    const response = await fetch(url, 
        {
            method: 'POST',
            headers: 
            {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data) 
        });

        const resData = await response.json();
        return resData;
}

//postOpportunity(apiUrl, data);