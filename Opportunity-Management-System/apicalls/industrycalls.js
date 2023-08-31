async function getIndustries()
{
    var url = BASE_URL+"industry/";
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

async function getIndustryById(id)
{
    var url = BASE_URL+"industry/"+id;
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

async function postIndustry(data)
{
    try
    {
        var url = BASE_URL+"industry/";
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

async function deleteIndustry(id)
{
    try
    {
        var url = BASE_URL+"opportunity/"+id
        const response = await fetch(url, 
            {
                method: 'DELETE',
                headers: 
                {
                    'Content-type': 'application/json'
                }
            });
    
            const resData = await response.json();
            return resData; 
    } catch (error)
    {
        console.log("Error:", error);
    }
    
}


getIndustries();
getIndustryById(id);
postIndustry(data);
deleteIndustry(id);