async function getLocations()
{
    var url = BASE_URL+"location/";
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

async function getLocationById(id)
{
    var url = BASE_URL+"location/"+id;
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

async function updateLocation(id, data)
{
    try
    {
        var url = BASE_URL+"location/"+id
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

async function postLocation(data)
{
    try
    {
        var url = BASE_URL+"location/";
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

getLocations();
getLocationById(id);
updateLocation(id, data);
postLocation(data);