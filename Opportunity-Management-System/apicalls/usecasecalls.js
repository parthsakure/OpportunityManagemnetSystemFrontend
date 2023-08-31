async function getUseCase()
{
    var url = BASE_URL+"usecase/";
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);
}

async function getUseCaseById(id)
{
    var url = BASE_URL+"usecase/"+id;
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);
}

async function updateUseCase(id, data)
{
    try
    {
        var url = BASE_URL+"usecase/"+id
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

async function deleteUseCase(id)
{
    try
    {
        var url = BASE_URL+"usecase/"+id
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

getUseCase();
getUseCaseById(id);
updateUseCase(id, data);
deleteUseCase(data);