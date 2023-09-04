async function view_user_edit(id){
    showspinner();
    backButton.push(` view_user_edit(${id})`)
    const user = await getUsersById(id);
    createForm(document.querySelector('#app'),'Update User', prepareUserForForm(user),'PUT');
    if(user){
        hidespinner();
    }
}

async function view_opportunity_edit(id){
    showspinner();
    backButton.push(` view_opportunity_edit(${id})`)
    const opportunity = await getOpportunitiesById(id,false);
    createForm(document.getElementById("app"),"Update Opportunity", prepareOpportunityForForm(opportunity),'PUT');
    if(opportunity){
        hidespinner();
    }
}

async function view_company_edit(id){
    showspinner();
    backButton.push(` view_company_edit(${id})`)
    const company = await getCompanyById(id);
    createForm(document.querySelector('#app'),'Update Company', prepareCompanyForForm(company),'PUT');
    if(company){
        hidespinner();
    }
}


async function view_location_edit(id){
    showspinner();
    backButton.push(` view_location_edit(${id})`)
    const loc = await getLocationById(id);
    createForm(document.getElementById('app'), 'Update Location',prepareLocationForForm(loc),'PUT');
    if(loc){
        hidespinner();
    }
}