async function view_user_edit(id){
    const user = await getUsersById(id);
    console.log(user);
}

async function view_opportunity_edit(id){
    const opportunity = await getOpportunitiesById(id,false);
    createForm(document.getElementById("app"),"Update Opportunity", prepareOpportunityForForm(opportunity),'PUT');
}