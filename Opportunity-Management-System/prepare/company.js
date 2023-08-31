
function prepareCompanyForForm(data){
    let company = {};
    company['id'] = {name:"Id", type:"text", disabled: true, value: data['companyId']};
    company['companyName'] = {name:"Title", type:"text", disabled: !isAdmin, value: data['companyName']};
    company['websiteUrl'] = {name:"Description", type:"text", disabled: !isAdmin, value: data['websiteUrl']};
    company['years'] = {name:"year", type:"number", disabled: !isAdmin, value: data['years']};
    company['industry'] = {name:"industy", type:"dropdown", disabled: !isAdmin, value: data['industry'] ? data['industry']['industry'] : ""};
    company['location'] = {name:"Postal Code", type:"dropdown", disabled: !isAdmin, value: data['locaion'] ? data['location']['postalCode'] : ""};

    return company;
};

function prepareCompanyForList(data){
    let companies = [];
    data.forEach(element => {
        company = {};
        company['Name'] = element['companyName']
        company['Website'] = element['websiteUrl']
        company['industry'] = element['industry'] != null ? element['industry']['industry']: "";
        // company['Active'] = element['active'] ? 'Active' : 'Not Active';
        companies.push({value:company, callback:`veiw_company(${element['companyId']})`});
    });
    return companies;
}


function prepareCompanyForDetails(data){
    let company = {};
    company["Id"] = data['companyId']
    company['Name'] = data['companyName']
    company['Website'] = data['websiteUrl']
    company['industry'] = data['industry']!=null ? data['industry']['industry'] : "N/A";
    company['years'] = data['years']
    company['PostalCode'] = data['location']!=null ? data['location']['postalCode'] : "N/A";
    company['Country'] = data['location'] ? data['location']['country']!=null ? data['location']['country']['country'] : "N/A" : "N/A";
    return company;
}

function prepareCompanyForCreateForm(){
    let company = {};
    company['id'] = {name:"Id", type:"text",disabled:true, value:0};
    company['companyName'] = {name:"Name", type:"text"};
    company['years'] = {name:"Description", type:"number"};
    company['location'] = {name:"Location", type:"dropdown"};
    company['industry'] = {name:"Industry", type:"dropdown"};
    company['websiteUrl'] = {name:"Website", type:"url"};

    return company;
};