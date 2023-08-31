async function view_opportunities(){
    const opportunitiesData = await getOpportunities();
    createTable(document.getElementById("app"),"Opportunities",prepareOpportunityForList(opportunitiesData),false)
}

async function view_transactions(){
    let transactionsData = null;
    if(isAdmin){
        transactionsData = await getAllTransactions();
    }
    else{
        transactionsData = await getMyTransactions();
    }
    createTable(document.getElementById("app"),"Tranasctions",prepareTransactionsForList(transactionsData,isAdmin),false)
}

async function view_users(){
    const userData = await getUsers();
    console.log(userData);
    createTable(document.getElementById("app"),"Users",prepareUserForList(userData),false)
}

async function view_user(id){
    const user = await getUsersById(id);
    console.log(user);
    showDetailedView(document.getElementById("app"),"User: "+user['username'], prepareUserForDetails(user),false);
}