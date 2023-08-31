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
    const userData = await getAllTransactions();
    createTable(document.getElementById("app"),"Users",prepareUserForList(transactionsData),false)
}