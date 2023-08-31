async function view_user_edit(id){
    const user = await getUsersById(id);
    createForm(document.querySelector('#app'),'Update User', prepareUserForForm(user),'PUT');
}

async function view_opportunity_edit(id){
    const opportunity = await getOpportunitiesById(id,false);
    createForm(document.getElementById("app"),"Update Opportunity", prepareOpportunityForForm(opportunity),'PUT');
}