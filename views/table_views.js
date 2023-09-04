function showspinner(){
    const div = document.querySelector('.root');
    div.classList.add("loader");
    document.body.appendChild(div);    
}
function hidespinner(){
    document.querySelector('.root').classList.remove("loader");
}


async function view_opportunities(){
    showspinner();
    backButton.push('view_opportunities()')
    const opportunitiesData = await getOpportunities();
    console.log(opportunitiesData);
    if(opportunitiesData){
        hidespinner();
    }
    if(opportunitiesData['message']!=null){
    createTable(document.getElementById('app'),"Opportunities",[{value: {}}],true);
    }
    else{
    createTable(document.getElementById("app"),"Opportunities",prepareOpportunityForList(opportunitiesData),true)
    }
}

async function view_transactions(){
    showspinner();
    backButton.push('view_transactions()')
    let transactionsData = null;
    if(isAdmin){
        transactionsData = await getAllTransactions();
    }
    else{
        transactionsData = await getMyTransactions();
    }
    if(transactionsData){
        hidespinner();
    }
    createTable(document.getElementById("app"),"Transactions",prepareTransactionsForList(transactionsData,isAdmin),false)
}

async function view_users(){
    showspinner();
    backButton.push('view_users()')
    const userData = await getUsers();
    if(userData){
        hidespinner();
    }
    createTable(document.getElementById("app"),"Users",prepareUserForList(userData),false)
}

async function view_logout(){
    backButton.push('view_logout()')
    console.log("logout");
    localStorage.clear();
    location.reload();
}


async function view_profile(){
    showspinner();
    backButton.push('view_profile()')
    const user = await getAuthUser();
    if(user){
        hidespinner();
    }
    showDetailedView(document.getElementById('app'), user['username'], prepareUserForDetails(user),false);
}

async function view_companies(){
    showspinner();
    backButton.push('view_companies()')
    const companies = await getCompany();
    if(companies){
        hidespinner();
    }
    createTable(document.getElementById("app"),"Companies",prepareCompanyForList(companies),true)
}

async function view_locations(){
    showspinner();
    backButton.push('view_locations()')
    const locs = await getLocations();
    if(locs){
        hidespinner();
    }
    createTable(document.getElementById("app"),"Locations",prepareLocationForList(locs),true)
}
