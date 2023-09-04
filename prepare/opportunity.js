function getDealStage(dealstage){
    classes = [];
    classes.push("border");
    classes.push("rounded-pill");
    // console.log(dealstage.toLowerCase())
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
    opportunity["Id"] = data["opportunityId"];
    opportunity["Title"] = data["title"];
    if(isAdmin) opportunity["Deal Owner"] = "@" + data["dealOwner"]["username"];
    opportunity["Description"] = data["description"];
    opportunity["Primary Need"] = data["primaryNeed"];
    opportunity["Expected Monthly Revenue"] = data["expectedMonthlyRevenue"];
    const date = new Date(data["expectedLaunchDate"]);
    opportunity["Expected Launch Date"] = date.toLocaleDateString();
    opportunity["Active"] = {value: data["active"] ? "Active" : "Not Active",classes:{value:data["active"]?[ "bg-success-subtle","border","border-success","rounded-pill" ]: ["bg-danger-subtle","border","border-danger","rounded-pill" ]}};
    opportunity["Delivery Model"] = data["deliveryModel"]["deliveryModel"];
    opportunity["Deal Stage"] = getDealStage(data["dealStage"]["dealStage"]);

    return opportunity;
}


function prepareOpportunityForForm(data){
    let opportunity = {};
    opportunity['id'] = {name:"Id", type:"text", disabled: true, value: data['opportunityId']};
    opportunity['title'] = {name:"Title", type:"text", disabled: true, value: data['title']};
    opportunity['description'] = {name:"Description", type:"text", disabled: false, value: data['description']};
    opportunity['primaryNeed'] = {name:"Primary Need", type:"text", disabled: false, value: data['primaryNeed']};
    opportunity['expectedMonthlyRevenue'] = {name:"Expected Monthly Revenue", type:"number", disabled: false, value: data['expectedMonthlyRevenue']};
    opportunity['expectedLaunchDate'] = {name:"Expected Launch Date", type:"date", disabled: false, value: data['expectedLaunchDate']};
    opportunity['closedLostReason'] = {name:"Closed Lost Reason", type:"text", disabled: !isAdmin, value: data['closedLostReason']};
    opportunity['deliveryModel'] = {name:"Delivery Model", type:"dropdown", disabled: !isAdmin, value: data['deliveryModel']['deliveryModel']};
    opportunity['dealStage'] = {name:"Deal Stage", type:"dropdown", disabled: !isAdmin, value: data['dealStage']['dealStage']};
    opportunity['dealOwner'] = {name:"Deal Owner", type:"dropdown", disabled: !isAdmin, value: data['dealOwner']['username']};
    opportunity['useCases'] = {name:"Use Cases", type:"dropdown", disabled: false, value: data['useCases']};

    return opportunity;
};

function prepareOpportunityForCreateForm(){
    let opportunity = {};
    opportunity['id'] = {name:"Id", type:"text",disabled:true, value:0};
    opportunity['title'] = {name:"Title", type:"text", disabled: false};
    opportunity['description'] = {name:"Description", type:"text", disabled: false};
    opportunity['primaryNeed'] = {name:"Primary Need", type:"text", disabled: false};
    opportunity['expectedMonthlyRevenue'] = {name:"Expected Monthly Revenue", type:"number", disabled: false};
    opportunity['expectedLaunchDate'] = {name:"Expected Launch Date", type:"date", disabled: false};
    opportunity['closedLostReason'] = {name:"Closed Lost Reason", type:"text", disabled: true};
    opportunity['deliveryModel'] = {name:"Delivery Model", type:"dropdown", disabled: false};
    opportunity['dealStage'] = {name:"Deal Stage", type:"dropdown", disabled: false};
    opportunity['dealOwner'] = {name:"Deal Owner", type:"dropdown", disabled: false};
    opportunity['useCases'] = {name:"Use Cases", type:"dropdown", disabled: false};

    return opportunity;
};