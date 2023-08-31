//company
async function view_delete_company(id){
    const company = await getCompanyById(id);
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(deletecomp({entity:'company', name: company['companyName'], id:company['companyId']}));
}


//user
async function view_delete_user(id){
    const user = await getUsersById(id);
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(deletecomp({entity:'user', name: user['username'], id:user['userId']}));
}

//opportunity
async function view_delete_opportunity(id){
    const opportunity = await getOpportunitiesById(id,true);
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(deletecomp({entity:'opportunity', name: opportunity['title'], id:opportunity['opportunityId']}));
}

async function delete_company(id){
    data = await deleteCompany(id);
    console.log(data);
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(creatteTitle("Company Deleted!"));
}


async function delete_user(id){
    data = await deleteUser(id);
    console.log(data);
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(creatteTitle("User Deleted!"));
}


async function delete_opportunity(id){
    opportunity = await getOpportunitiesById(id,true);
    opportunity['closedLostReason'] = document.querySelector('#reason').value;
    opportunity['dealOwner'] = {userId:opportunity['dealOwner']['userId']};
    opportunity['dealStage'] = {dealStageId:opportunity['dealStage']['dealStageId']};
    opportunity['deliveryModel'] = {deliveryModelId:opportunity['deliveryModel']['deliveryModelId']};
    console.log(opportunity);
    data = await updateOpportunity(id,opportunity);
    data = await deleteOpportunity(id);
    console.log(data);
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(createTitle("Opportunity Deleted!"));
}