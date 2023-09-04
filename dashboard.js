function dashboardcards(data) {
  console.log(data);

  const root = document.createElement("div");
  root.classList.add("row", "row-cols-1"); // For mobile devices, set it to 1 column

  data.forEach((x) => {
    const card = document.createElement("div");
    card.classList.add("col-md-3",'card-heights'); // Use Bootstrap's responsive column classes

    const title = document.createElement("p");
    console.log(x);
    title.innerHTML = x["value"];

    card.appendChild(title);
    card.classList.add(
      "card",
      "card-text",
      "card-body",
      "m-2",
      "p-2",
      "btn",
      "btn-primary",
    );
    card.setAttribute("onClick", x["callback"] + "()");
    root.appendChild(card);
    hidespinner();
  });
  return root;
}
