async function getDealStage()
{
    var url = BASE_URL+"dealstages/";
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);
    return data;
}

export default getDealStage;