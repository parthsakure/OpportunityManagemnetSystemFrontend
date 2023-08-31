function getDealStage(dealstage){
    classes = [];
    classes.push("border");
    classes.push("rounded-pill");
    console.log(dealstage.toLowerCase())
    switch (dealstage.toLowerCase()) {
        case "approved":
            classes.push("border-info")
            classes.push("border-info-subtle")
            break;
        
        case "closed/lost":
            classes.push("border-danger")
            classes.push("bg-danger-subtle")
            break;

        case "launched":
            classes.push("border-success")
            classes.push("bg-success-subtle")
            break;
        default:
            classes.push("border-warning")
            classes.push("bg-warning-subtle")
            break;
    }
    return {value: dealstage,classes:{value:classes}};
}


function prepareOpportunityForList(data){
    let finalData = [];
    data.forEach(row => {
        let opportunity = {};
        opportunity["title"] = row["title"];

        if(isAdmin) opportunity["Deal Owner"] = "@" + row["dealOwner"]["username"];

        opportunity["description"] = row["description"];
        opportunity["deal Stage"]= row["dealStage"]["dealStage"];

        let classes = [];
        if(!row["active"]){
            classes.push("disabled");
        }
        finalData.push({value:opportunity, callback:`view_opportunity(${row['opportunityId']},${row['active']})`});
    });
    return finalData;
}


function prepareOpportunityDetails(data){
    console.log(data);
    let opportunity = {};
    opportunity["Id"] = row["opportunityId"];
    opportunity["Title"] = data["title"];
    if(isAdmin) opportunity["Deal Owner"] = "@" + data["dealOwner"]["username"];
    opportunity["Description"] = data["description"];
    opportunity["Primary Need"] = data["primaryNeed"];
    opportunity["Expected Monthly Revenue"] = data["expectedMonthlyRevenue"];
    opportunity["Expected Launch Date"] = data["expectedLaunchDate"];
    opportunity["Active"] = {value: data["active"] ? "Active" : "Not Active",classes:{value:data["active"]?[ "bg-success-subtle","border","border-success","rounded-pill" ]: ["bg-danger-subtle","border","border-danger","rounded-pill" ]}};
    opportunity["Delivery Model"] = data["deliveryModel"]["deliveryModel"];
    opportunity["Deal Stage"] = getDealStage(data["dealStage"]["dealStage"]);

    return opportunity;
}

