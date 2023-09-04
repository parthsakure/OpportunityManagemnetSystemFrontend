//company
async function view_delete_company(id){
    showspinner();
    const company = await getCompanyById(id);
    hidespinner();
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(deletecomp({entity:'company', name: company['companyName'], id:company['companyId']}));
}


//user
async function view_delete_user(id){
    showspinner();
    const user = await getUsersById(id);
    hidespinner();
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(deletecomp({entity:'user', name: user['username'], id:user['userId']}));
}

//opportunity
async function view_delete_opportunity(id){
    showspinner();
    const opportunity = await getOpportunitiesById(id,true);
    hidespinner();
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(deletecomp({entity:'opportunity', name: opportunity['title'], id:opportunity['opportunityId']}));
}

async function delete_company(id){
    showspinner();
    data = await deleteCompany(id);
    hidespinner();
    console.log(data);
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(creatteTitle("Company Deleted!"));
}


async function delete_user(id){
    showspinner();
    data = await deleteUser(id);
    hidespinner();
    console.log(data);
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(creatteTitle("User Deleted!"));
}


async function delete_opportunity(id){
    showspinner();
    opportunity = await getOpportunitiesById(id,true);
    opportunity['closedLostReason'] = document.querySelector('#reason').value;
    opportunity['dealOwner'] = {userId:opportunity['dealOwner']['userId']};
    opportunity['dealStage'] = {dealStageId:opportunity['dealStage']['dealStageId']};
    opportunity['deliveryModel'] = {deliveryModelId:opportunity['deliveryModel']['deliveryModelId']};
    console.log(opportunity);
    data = await updateOpportunity(id,opportunity);
    data = await deleteOpportunity(id);
    hidespinner();
    console.log(data);
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').appendChild(createTitle("Opportunity Deleted!"));
}