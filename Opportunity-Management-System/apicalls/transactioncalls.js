async function getAllTransactions()
{
    var url = BASE_URL+"transactions/";
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);  
    return data; 
}

async function getMyTransactions()
{
    var url = BASE_URL+"transactions/mytransactions";
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);  
    return data; 
}

getAllTransactions();
getMyTransactions();