async function getUsers()
{
    var url = BASE_URL+"user/";
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

async function getUsersById(id)
{
    var url = BASE_URL+"user/"+id;
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

async function updateUser(id, data)
{
    try
    {
        var url = BASE_URL+"user/"+id
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

async function deleteUser(id)
{
    try
    {
        var url = BASE_URL+"user/"+id
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

getUsers();
getUsersById();
updateUser(id, data);
deleteUser(id);