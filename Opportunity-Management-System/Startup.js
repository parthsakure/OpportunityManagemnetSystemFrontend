const data = [{"opportunityId":2,"title":"Parth's","description":"description","primaryNeed":"to test my apis","expectedMonthlyRevenue":1973321.00,"expectedLaunchDate":"2024-09-06T00:30:00Z","closedLostReason":"not working", dealStage: {value:"approved"}},
{"opportunityId":2,"title":"Parth's","description":"description","primaryNeed":"to test my apis","expectedMonthlyRevenue":1973321.00,"expectedLaunchDate":"2024-09-06T00:30:00Z","closedLostReason":"not working", dealStage: {value:"Closed"}},
{"opportunityId":2,"title":"Parth's","description":"description","primaryNeed":"to test my apis","expectedMonthlyRevenue":1973321.00,"expectedLaunchDate":"2024-09-06T00:30:00Z","closedLostReason":"not working", dealStage: {value:"prospect"}},
{"opportunityId":2,"title":"Parth's","description":"description","primaryNeed":"to test my apis","expectedMonthlyRevenue":1973321.00,"expectedLaunchDate":"2024-09-06T00:30:00Z","closedLostReason":"not working", dealStage: {value:"approved"}},
{"opportunityId":2,"title":"Parth's","description":"description","primaryNeed":"to test my apis","expectedMonthlyRevenue":1973321.00,"expectedLaunchDate":"2024-09-06T00:30:00Z","closedLostReason":"not working", dealStage: {value:"approved"}},]


createTable(document.querySelector("#app"),[
    {
        name: "title"
    },
    {
        name: "description"
    },
    {
        name: "primaryNeed"
    },
    {
        name: "expectedMonthlyRevenue"
    },
    {
        name: "expectedLaunchDate"
    },
    {
        name: "deal Stage",
        entityName:"dealStage"
    }],
    data,
    true);
