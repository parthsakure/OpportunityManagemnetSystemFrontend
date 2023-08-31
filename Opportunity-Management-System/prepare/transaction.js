function prepareTransactionsForList(data, isAdmin=false) {
    let transactions = [];
    data.forEach(trData => {
        let transaction = {};
        if(isAdmin) transaction["User"] = trData["user"]["username"];
        transaction["Opportunity"] = trData["opportunity"]["title"];
        transaction["Deal Stage"] = trData["dealStage"]["dealStage"];
        transaction["Reward"] = trData["dealStage"]["rewardPrice"];
        transactions.push({value:transaction});
    });
    return transactions;
}