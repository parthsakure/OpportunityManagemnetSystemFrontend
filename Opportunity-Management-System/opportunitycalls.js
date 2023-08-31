async function getOpportunities()
{
    var apiUrl = BASE_URL+"opportunity/";
    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
}


async function postOpportunity(data)
{
    try
    {
        var url = BASE_URL+"opportunity/";
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
    } catch (error)
    {
        console.log("Error:", error);
    }
    
}


async function getOpportunitiesById(id, active)
{
    var url = BASE_URL+"opportunity/"+id+"?active="+active;
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}


async function updateOpportunity(id, data)
{
    try
    {
        var url = BASE_URL+"/opportunity/"+id
        const response = await fetch(url, 
            {
                method: 'PUT',
                headers: 
                {
                    'Content-type': 'application/json'
                },
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
        var url = BASE_URL+"/opportunity/"+id
        const response = await fetch(url, 
            {
                method: 'DELETE',
                headers: 
                {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            const resData = await response.json();
            return resData; 
    } catch (error)
    {
        console.log("Error:", error);
    }
}



getOpportunities();
postOpportunity(data);
getOpportunitiesById(id, active);
updateOpportunity(id, data);
deleteOpportunity(id, data);

