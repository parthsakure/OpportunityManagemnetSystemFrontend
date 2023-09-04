async function view_opportunities(){
    backButton.push('view_opportunities()')
    const opportunitiesData = await getOpportunities();
    console.log(opportunitiesData);
    createTable(document.getElementById("app"),"Opportunities",prepareOpportunityForList(opportunitiesData),true)
}

async function view_transactions(){
    backButton.push('view_transactions()')
    let transactionsData = null;
    if(isAdmin){
        transactionsData = await getAllTransactions();
    }
    else{
        transactionsData = await getMyTransactions();
    }
    createTable(document.getElementById("app"),"Transactions",prepareTransactionsForList(transactionsData,isAdmin),false)
}

async function view_users(){
    backButton.push('view_users()')
    const userData = await getUsers();
    createTable(document.getElementById("app"),"Users",prepareUserForList(userData),false)
}

async function view_logout(){
    backButton.push('view_logout()')
    console.log("logout");
    localStorage.clear();
    location.reload();
}


async function view_profile(){
    backButton.push('view_profile()')
    const user = await getAuthUser();
    showDetailedView(document.getElementById('app'), user['username'], prepareUserForDetails(user),false);
}

async function view_companies(){
    backButton.push('view_companies()')
    const companies = await getCompany();
    createTable(document.getElementById("app"),"Companies",prepareCompanyForList(companies),true)
}

async function view_locations(){
    backButton.push('view_locations()')
    const locs = await getLocations();
    createTable(document.getElementById("app"),"Locations",prepareLocationForList(locs),true)
}
