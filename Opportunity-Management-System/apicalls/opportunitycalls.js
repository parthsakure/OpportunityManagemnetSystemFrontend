async function getOpportunities()
{
    var url = BASE_URL+"opportunity/";
    const response = await fetch(url, 
    {
        headers: getHeader()
    });
    var data = await response.json();
    console.log(data);
    return data;
}



async function postOpportunity(data)
{
    try
    {
        var url = BASE_URL+"opportunity/";
        const response = await fetch(url, 
            {
                method: 'POST',
                headers: getHeader(),
                body: JSON.stringify(data) 
            });

            const resData = await response.json();
            return resData;
    } catch (error)
    {
        console.log("Error:", error);
    }
    
}


async function getOpportunitiesById(id, active)
{
    var url = BASE_URL+"opportunity/"+id+"?active="+active;
    const response = await fetch(url, 
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);
    return data;
}


async function updateOpportunity(id, data)
{
    try
    {
        var url = BASE_URL+"opportunity/"+id
        const response = await fetch(url, 
            {
                method: 'PUT',
                headers: getHeader(),
                body: JSON.stringify(data)
            });
    
            const resData = await response.json();
            return resData; 
    } catch (error)
    {
        console.log("Error:", error);
    }
}


async function deleteOpportunity(id, data)
{
    try
    {
        var url = BASE_URL+"opportunity/"+id
        const response = await fetch(url, 
            {
                method: 'DELETE',
                headers: getHeader(),
                body: JSON.stringify(data)
            });
    
            const resData = await response.json();
            return resData; 
    } catch (error)
    {
        console.log("Error:", error);
    }
}