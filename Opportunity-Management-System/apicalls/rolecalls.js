async function getRoles()
{
    var url = BASE_URL+"opportunity/";
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

getRoles();