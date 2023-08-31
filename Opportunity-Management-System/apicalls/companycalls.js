async function getCompany()
{
    var url = BASE_URL+"company/";
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);
}


async function getCompanyById(id)
{
    var url = BASE_URL+"company/"+id;
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);
}


async function updateCompany(id, data)
{
    try
    {
        var url = BASE_URL+"company/"+id
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


async function deleteCompany(id)
{
    try
    {
        var url = BASE_URL+"company/"+id
        const response = await fetch(url, 
            {
                method: 'DELETE',
                headers: getHeader()
            });
    
            const resData = await response.json();
            return resData; 
    } catch (error)
    {
        console.log("Error:", error);
    }
}


async function postCompany()
{
    try
    {
        var url = BASE_URL+"company/";
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


