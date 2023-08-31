async function getAuthUser()
{
    var url = BASE_URL+"profile";
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);
    return data;
}
getAuthUser()