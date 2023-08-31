
async function view_update_opportunity(id,method){
    form = document.querySelector("#form");
    opportunity = {};
    opportunity['opportunityId'] = id;
    opportunity['title'] = form.querySelector('#title').value;
    opportunity['description'] = form.querySelector('#description').value;
    opportunity['primaryNeed'] = form.querySelector('#primaryNeed').value;
    opportunity['expectedMonthlyRevenue'] = form.querySelector('#expectedMonthlyRevenue').value;
    opportunity['expectedLaunchDate'] = Date.parse(form.querySelector('#expectedLaunchDate').value);
    opportunity['closedLostReason'] = form.querySelector('#closedLostReason').value;
    opportunity['deliveryModel'] = {deliveryModelId: form.querySelector('#deliveryModel').value};
    opportunity['dealStage'] = {dealStageId : form.querySelector('#dealStage').value};
    opportunity['dealOwner'] = {userId: form.querySelector('#dealOwner').value};

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

    if(data['title']==null){
        
    document.querySelector("#app").appendChild(createTitle(`Failed!`))
    }
    console.log(data);
    document.querySelector('#app').innerHTML="";
    document.querySelector("#app").appendChild(createTitle(`User Updated!`))
}