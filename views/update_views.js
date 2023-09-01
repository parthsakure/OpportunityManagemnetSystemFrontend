
async function view_update_opportunity(id,method){
    form = document.querySelector("#form");
    opportunity = {};
    opportunity['opportunityId'] = id;
    opportunity['title'] = form.querySelector('#title').value;
    opportunity['description'] = form.querySelector('#description').value;
    opportunity['primaryNeed'] = form.querySelector('#primaryNeed').value;
    opportunity['expectedMonthlyRevenue'] = form.querySelector('#expectedMonthlyRevenue').value;
    opportunity['expectedLaunchDate'] = Date.parse(form.querySelector('#expectedLaunchDate').value);
    opportunity['closedLostReason'] = method=='PUT' ? form.querySelector('#dealStage').value : '';
    opportunity['deliveryModel'] = {deliveryModelId: form.querySelector('#deliveryModel').value};
    opportunity['dealStage'] = {dealStageId : method=='PUT' ? form.querySelector('#dealStage').value : 1};
    opportunity['dealOwner'] = {userId: !isAdmin ? USER_ID : form.querySelector('#dealOwner').value};

    opportunity['useCases'] = [];
    options = form.querySelector('#useCases').options;
    for (let i = 0; i < options.length; i++) {
        const element = options[i];
        if(element.selected){
            opportunity['useCases'].push({"useCaseId": element.value});
        }
    }
    data = null;
    if(method=='PUT') 
    data = await updateOpportunity(id, opportunity);
else{
    data = await postOpportunity(opportunity)
}
if(data['title']==null){
    
document.querySelector("#app").appendChild(createTitle(`Failed!`))
}
console.log(data);
document.querySelector('#app').innerHTML="";
document.querySelector("#app").appendChild(createTitle(`Opportunity ${method=='PUT' ? 'Updated' : 'Created'}!`))
}

async function view_update_user(id,method){
    form = document.querySelector("#form");
    user = {};
    user['userId'] = id;
    user['username'] = form.querySelector('#username').value;
    user['firstName'] = form.querySelector('#firstName').value;
    user['lastName'] = form.querySelector('#lastName').value;
    user['email'] = form.querySelector('#email').value;
    user['contactNo'] = form.querySelector('#contactNo').value;
    user['bbdBucks'] = form.querySelector('#bbdBucks').value;
    user['active'] = true;
    user['role'] = {roleId : form.querySelector('#role').value};
    user['company'] = {companyId: form.querySelector('#company').value};

    data = null;
    if(method=='PUT') 
    data = await updateUser(id, user);

    if(data['username']==null){
        
    document.querySelector("#app").appendChild(createTitle(`Failed!`))
    }
    console.log(data);
    document.querySelector('#app').innerHTML="";
    document.querySelector("#app").appendChild(createTitle(`User Updated!`))
}

async function view_update_company(id,method){
    form = document.querySelector("#form");
    company = {};
    company['companyId'] = id;
    company['companyName'] = form.querySelector('#companyName').value;
    company['years'] = form.querySelector('#years').value;
    company['location'] = {locationId:form.querySelector('#location').value};
    company['industry'] = {industryId:form.querySelector('#industry').value};
    company['websiteUrl'] = form.querySelector('#websiteUrl').value;
    company['active'] = true;

    console.log(company);
    data = null;
    if(method=='PUT') {
        data = await updateCompany(id, company);
    }
    else{
        company['companyId'] = 0;
        data = await postCompany(company);
    }
    document.querySelector('#app').innerHTML="";
    if(data['companyName']==null){
        
        document.querySelector("#app").appendChild(createTitle(`Failed!`))
    }
    else{
        console.log(data);
        document.querySelector("#app").appendChild(createTitle(`Company ${method=='PUT' ? 'Updated' : 'Created'}!`))
    }

}

async function view_update_location(id,method){
    form = document.querySelector("#form");
    loc = {};
    loc['locationId'] = id;
    loc['postalCode'] = form.querySelector('#postalCode').value;
    loc['country'] = {countryId:form.querySelector('#country').value};
    data = null;
    if(method == 'PUT'){
        data = await updateLocation(id,loc);
    }
    else{
        data = await postLocation(loc);
    }
    console.log(data);
    document.querySelector('#app').innerHTML="";
    document.querySelector("#app").appendChild(createTitle(`Location ${method=='PUT' ? 'Updated' : 'Created'}!`))
}