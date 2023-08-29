
// fetch(apiUrl).then(response => {
//     console.log(response)
//   response.json().then(data => {

//   console.log(data);
// }).catch(err => {
//   // Do something for an error here
//   console.log("error");
// })
// });



async function getOpportunities()
{
    var apiUrl = 'http://localhost:8080/opportunity/';
    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
}

// getOpportunities(apiUrl);



