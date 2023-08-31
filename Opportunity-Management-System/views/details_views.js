async function view_opportunity(id,active){
    const opportunity = await getOpportunitiesById(id,active);
    // console.log(opportunity);
    showDetailedView(document.getElementById("app"),"Opportunity: "+opportunity['title'], prepareOpportunityDetails(opportunity),false);
}



async function view_user(id){
    const user = await getUsersById(id);
    showDetailedView(document.getElementById("app"),"User: "+user['username'], prepareUserForDetails(user),false);
}

