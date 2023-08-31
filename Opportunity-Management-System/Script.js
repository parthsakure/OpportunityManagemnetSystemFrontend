const data = [{"opportunityId":2,"title":"Parth's","description":"description","primaryNeed":"to test my apis","expectedMonthlyRevenue":1973321.00,"expectedLaunchDate":"2024-09-06T00:30:00Z","closedLostReason":"not working","active":true,"usecases":[{"useCaseId":2,"useCase":"Big Data"},{"useCaseId":5,"useCase":"Containers & Serverless"}],"deliveryModel":{"deliveryModelId":6,"deliveryModel":"Other"},"dealStage":{"dealStageId":1,"dealStage":"Prospect","rewardPrice":50},"dealOwner":{"userId":2,"username":"parthsakure01","firstName":"Parth","lastName":"sakure","email":"parthsakure01@gmail.com","contactNo":null,"bbdBucks":50,"active":true,"role":{"roleId":3,"role":"ROLE_USER"},"company":null,"enabled":true,"authorities":[{"authority":"ROLE_USER"}],"password":"********","accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true}},{"opportunityId":1,"title":"Arya's opportunity","description":"test","primaryNeed":"to test my apis","expectedMonthlyRevenue":12345678.99,"expectedLaunchDate":"2023-10-31T00:30:00Z","closedLostReason":"alive","active":false,"usecases":[{"useCaseId":4,"useCase":"Cloud Management Tools & DevOps"},{"useCaseId":16,"useCase":"Security"}],"deliveryModel":{"deliveryModelId":4,"deliveryModel":"Professional Services"},"dealStage":{"dealStageId":7,"dealStage":"Closed Lost","rewardPrice":0},"dealOwner":{"userId":1,"username":"aryashanbhag3","firstName":"Arya","lastName":"","email":"aryashanbhag3@gmail.com","contactNo":null,"bbdBucks":150,"active":true,"role":{"roleId":3,"role":"ROLE_USER"},"company":null,"enabled":true,"authorities":[{"authority":"ROLE_USER"}],"password":"********","accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true}},{"opportunityId":3,"title":"Arya's new opportunity","description":"test","primaryNeed":"to test my apis","expectedMonthlyRevenue":12345678.99,"expectedLaunchDate":"2023-10-31T00:30:00Z","closedLostReason":"dont want","active":false,"usecases":[{"useCaseId":4,"useCase":"Cloud Management Tools & DevOps"},{"useCaseId":16,"useCase":"Security"}],"deliveryModel":{"deliveryModelId":4,"deliveryModel":"Professional Services"},"dealStage":{"dealStageId":7,"dealStage":"Closed Lost","rewardPrice":0},"dealOwner":{"userId":1,"username":"aryashanbhag3","firstName":"Arya","lastName":"","email":"aryashanbhag3@gmail.com","contactNo":null,"bbdBucks":150,"active":true,"role":{"roleId":3,"role":"ROLE_USER"},"company":null,"enabled":true,"authorities":[{"authority":"ROLE_USER"}],"password":"********","accountNonExpired":true,"accountNonLocked":true,"credentialsNonExpired":true}}]


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

showDetailedView(document.querySelector("#app"),"opportunities",prepareOpportunityDetails(data[0]),true);

if(localStorage.getItem(TOKEN_NAME)==null){
    document.body.innerHTML =login_html
    // document.querySelector(".hidden").style.display='block';
}
else{
    
    // document.querySelector(".hidden").style.display='none';
}
