async function getDealStage()
{
    var url = BASE_URL+"dealstages/";
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

getDealStage();