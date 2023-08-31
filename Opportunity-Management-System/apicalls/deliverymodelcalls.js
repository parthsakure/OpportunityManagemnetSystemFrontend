async function getDeliveryModels()
{
    var url = BASE_URL+"deliverymodel/";
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);
    return data;
}

async function getDeliveryModelById(id)
{
    var url = BASE_URL+"deliverymodel/"+id;
    const response = await fetch(url,
        {
            headers: getHeader()
        });
    var data = await response.json();
    console.log(data);
    return data;
}

async function postDeliveryModel(data)
{
    try
    {
        var url = BASE_URL+"deliverymodel/";
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

async function deleteDeliveryModel(id)
{
    try
    {
        var url = BASE_URL+"opportunity/"+id
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


getDeliveryModels();
getDeliveryModelById(id);
postDeliveryModel(data);
deleteDeliveryModel(id);