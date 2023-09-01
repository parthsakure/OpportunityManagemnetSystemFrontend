function view_create_opportunities(){
    createForm(document.getElementById('app'),"Create Opportunity", prepareOpportunityForCreateForm(),"POST")
}

function view_create_companies(){
    createForm(document.getElementById('app'),"Create Company", prepareCompanyForCreateForm(),"POST")
}


function view_create_locations(){
    createForm(document.getElementById('app'), 'Create Location', prepareLocationForCreateForm(), 'POST');
}