async function getRoles()
{
    var url = BASE_URL+"roles/";
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);
    return data;
}