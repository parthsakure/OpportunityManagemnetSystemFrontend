
function prepareCompanyForForm(data){
    let company = {};
    company['companyId'] = {name:"Id", type:"text", disabled: true, value: data['companyId']};
    company['companyName'] = {name:"Title", type:"text", disabled: !isAdmin, value: data['companyName']};
    company['websiteUrl'] = {name:"Description", type:"url", disabled: !isAdmin, value: data['websiteUrl']};
    company['years'] = {name:"year", type:"number", disabled: !isAdmin, value: data['years']};
    company['industy'] = {name:"industy", type:"dropdown", disabled: !isAdmin, value: data['industy']['industy']};
    company['country'] = {name:"Deal Stage", type:"dropdown", disabled: !isAdmin, value: data['country']['country']};

    return company;
};