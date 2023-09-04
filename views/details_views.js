async function view_opportunity(id,active){
    backButton.push(`view_opportunity(${id},${active})`)
    console.log("hjkowfivurhebnefmoejnfv")
    const opportunity = await getOpportunitiesById(id,active);
    // console.log(opportunity);
    showDetailedView(document.getElementById("app"),"Opportunity: "+opportunity['title'], prepareOpportunityDetails(opportunity),true);
}



async function view_user(id){
    backButton.push(`view_user(${id})`)

    const user = await getUsersById(id);
    showDetailedView(document.getElementById("app"),"User: "+user['username'], prepareUserForDetails(user),true);
}



async function veiw_company(id){
    backButton.push(`view_user(${id})`)

    const company = await getCompanyById(id);
    showDetailedView(document.getElementById('app'),'Company: '+company['companyName'], prepareCompanyForDetails(company), true);
}

async function view_location(id){
    backButton.push(`view_user(${id})`)

    const loc = await getLocationById(id);
    showDetailedView(document.getElementById('app'),'Location: '+loc['locationId'], prepareLocationForDetails(loc),true);
}