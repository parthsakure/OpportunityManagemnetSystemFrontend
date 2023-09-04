async function view_user_edit(id){
    const user = await view_user_edit(id);
    backButton.push(` view_location_edit(${id})`)
    createForm(document.querySelector('#app'),'Update User', prepareUserForForm(user),'PUT');
}

async function view_opportunity_edit(id){
    backButton.push(` view_opportunity_edit(${id})`)
    const opportunity = await getOpportunitiesById(id,false);
    createForm(document.getElementById("app"),"Update Opportunity", prepareOpportunityForForm(opportunity),'PUT');
}

async function view_company_edit(id){
    backButton.push(` view_company_edit(${id})`)
    const company = await getCompanyById(id);
    createForm(document.querySelector('#app'),'Update Company', prepareCompanyForForm(company),'PUT');
}


async function view_location_edit(id){
    backButton.push(` view_location_edit(${id})`)
    const loc = await getLocationById(id);
    createForm(document.getElementById('app'), 'Update Location',prepareLocationForForm(loc),'PUT');
}