async function getCountry()
{
    var url = BASE_URL+"countries/";
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}


getCountry();