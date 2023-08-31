async function view_opportunity(id,active){
    const opportunity = await getOpportunitiesById(id,active);
    // console.log(opportunity);
    showDetailedView(document.getElementById("app"),"Opportunity: "+opportunity['title'], prepareOpportunityDetails(opportunity),true);
}



async function view_user(id){
    const user = await getUsersById(id);
    showDetailedView(document.getElementById("app"),"User: "+user['username'], prepareUserForDetails(user),false);
}



async function veiw_company(id){
    const company = await getCompanyById(id);
    showDetailedView(document.getElementById('app'),'Company: '+company['companyName'], prepareCompanyForDetails(company), true);
}

async function view_location(id){
    const loc = await getLocationById(id);
    showDetailedView(document.getElementById('app'),'Location: '+loc['locationId'], prepareLocationForDetails(loc),true);
}