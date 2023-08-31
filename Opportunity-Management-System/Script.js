if(localStorage.getItem(TOKEN_NAME)==null){
    document.body.innerHTML = login_html;
    throw "User Not Logged In";
}

const data = [{"opportunityId":2,"title":"Parth's","description":"description","primaryNeed":"to test my apis","expectedMonthlyRevenue":1973321.00,"expectedLaunchDate":"2024-09-06T00:30:00Z","closedLostReason":"not working","active":true,"usecases":[{"useCaseId":2,"useCase":"Big Data"},{"useCaseId":5,"useCase":"Containers & Serverless"}],"deliveryModel":{"deliveryModelId":6,"deliveryModel":"Other"},"dealStage":{"dealStageId":1,"dealStage":"Prospect","rewardPrice":50},"dealOwner":{"userId":2,"username":"parthsakure01","firstName":"Parth","lastName":"sakure","email":"parthsakure01@gmail.com","contactNo":null,"bbdBucks":50,"active":true,"role":{"roleId":3,"role":"ROLE_USER"},"company":null,"enabled":true,"authorities":[{"authority":"ROLE_USER"}],"password":"********","accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true}},{"opportunityId":1,"title":"Arya's opportunity","description":"test","primaryNeed":"to test my apis","expectedMonthlyRevenue":12345678.99,"expectedLaunchDate":"2023-10-31T00:30:00Z","closedLostReason":"alive","active":false,"usecases":[{"useCaseId":4,"useCase":"Cloud Management Tools & DevOps"},{"useCaseId":16,"useCase":"Security"}],"deliveryModel":{"deliveryModelId":4,"deliveryModel":"Professional Services"},"dealStage":{"dealStageId":7,"dealStage":"Closed Lost","rewardPrice":0},"dealOwner":{"userId":1,"username":"aryashanbhag3","firstName":"Arya","lastName":"","email":"aryashanbhag3@gmail.com","contactNo":null,"bbdBucks":150,"active":true,"role":{"roleId":3,"role":"ROLE_USER"},"company":null,"enabled":true,"authorities":[{"authority":"ROLE_USER"}],"password":"********","accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true}},{"opportunityId":3,"title":"Arya's new opportunity","description":"test","primaryNeed":"to test my apis","expectedMonthlyRevenue":12345678.99,"expectedLaunchDate":"2023-10-31T00:30:00Z","closedLostReason":"dont want","active":false,"usecases":[{"useCaseId":4,"useCase":"Cloud Management Tools & DevOps"},{"useCaseId":16,"useCase":"Security"}],"deliveryModel":{"deliveryModelId":4,"deliveryModel":"Professional Services"},"dealStage":{"dealStageId":7,"dealStage":"Closed Lost","rewardPrice":0},"dealOwner":{"userId":1,"username":"aryashanbhag3","firstName":"Arya","lastName":"","email":"aryashanbhag3@gmail.com","contactNo":null,"bbdBucks":150,"active":true,"role":{"roleId":3,"role":"ROLE_USER"},"company":null,"enabled":true,"authorities":[{"authority":"ROLE_USER"}],"password":"********","accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true}}]


const userData = [{"userId":1,"username":"aryashanbhag3","firstName":"Arya","lastName":"","email":"aryashanbhag3@gmail.com","contactNo":null,"bbdBucks":150,"active":false,"role":{"roleId":3,"role":"ROLE_USER"},"company":null,"enabled":true,"password":"********","authorities":[{"authority":"ROLE_USER"}],"accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true},{"userId":6,"username":"ladaman7","firstName":"Aman","lastName":"Lad","email":"ladaman7@gmail.com","contactNo":null,"bbdBucks":0,"active":true,"role":{"roleId":1,"role":"ROLE_ADMIN"},"company":null,"enabled":true,"password":"********","authorities":[{"authority":"ROLE_ADMIN"}],"accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true},{"userId":2,"username":"parthsakure01","firstName":"Parth","lastName":"sakure","email":"parthsakure01@gmail.com","contactNo":null,"bbdBucks":50,"active":true,"role":{"roleId":1,"role":"ROLE_ADMIN"},"company":null,"enabled":true,"password":"********","authorities":[{"authority":"ROLE_ADMIN"}],"accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true}]

const root = document.querySelector("#app");
// createTable(document.querySelector("#app"),[
//     {
//         name: "title"
//     },
//     {
//         name: "description"
//     },
//     {
//         name: "primaryNeed"
//     },
//     {
//         name: "expectedMonthlyRevenue"
//     },
//     {
//         name: "expectedLaunchDate"
//     },
//     {
//         name: "deal Stage",
//         entityName:"dealStage"
//     }],
//     data,
//     true);

// createTable(root, prepareUserForList(userData),false);

// showDetailedView(document.querySelector("#app"),"opportunities",prepareOpportunityDetails(data[0]),true);
// showDetailedView(document.querySelector("#app"),"User",prepareUserForDetails(userData[0]),true);


async function getAdminStatus(){
    const user = await getAuthUser();
    return user['role']['role'] === 'ROLE_ADMIN';
}

async function main(){
    const isAdmin = getAdminStatus();
    const navbarList = [
        {value:"Opportunities", callback: "view_opportunities"},
        {value:"Transactions", callback: "view_transactions"},
    ]
    if(isAdmin)
    navbarList.push({value: "Users", callback:"view_users"});

    const AccountList = [
        {value:"Profile", callback: "view_profile"},
        {value:"Log Out", callback: "view_logout"},
    ]
    document.querySelector(".collapse").appendChild(createNavBar(navbarList));
    document.querySelector(".collapse").appendChild(createNavBar(AccountList));
}

main();
