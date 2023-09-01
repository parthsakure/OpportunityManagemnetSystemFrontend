 function dashboardcards(data) {
    console.log(data)

  const root = document.createElement("div");
  root.classList.add("row",'row-cols-4')
//   root.setAttribute('class',"card")

   data.forEach((x) => {
    const card = document.createElement("div");
    card.classList.add("col")
    // card.setAttribute('class',"card-title card btn btn-primary")
    // card.className("card-title");
    const title = document.createElement("div");
    console.log(x)
    title.innerHTML=(x["value"]);
    
    card.appendChild(title);
    card.classList.add("card-title" ,"card","card-text","card","m-5","p-5","btn","btn-primary")
    card.setAttribute('onClick',x['callback']+'()')
    root.appendChild(card);
  });
  return root;
}
// console.log("here")
// dashboardcards(['qwewerth',"qwertyuio","wertyuio"])
// document.querySelector("#app").appendChild(dashboardcards(["qwewerth", "qwertyuio", "wertyuio"]));
