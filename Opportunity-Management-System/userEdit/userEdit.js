const users = {
  username: {
    type: "text",
    disabled: true,
  },
  firstName: {
    type: "text",
    disabled: false,
  },
  lastName: {
    type: "text",
    disabled: false,
  },
  company: {
    type: "dropbox",
    disabled: true,
  },
  role: {
    type: "dropbox",
    disabled: true,
  },
  contactNo: {
    type: "contact",
    disabled: false,
  },
  email: {
    type: "email",
    disabled: false,
  },
  company: {
    type: "email",
    disabled: false,
  },
};

const opportunities = {
  title: {
    type: "text",
    disabled: true,
  },
  discription: {
    type: "text",
    disabled: false,
  },
  primary_needs: {
    type: "text",
    disabled: false,
  },
  expected_monthly_revanue: {
    type: "dropbox",
    disabled: true,
  },
  expected_launch_date: {
    type: "dropbox",
    disabled: true,
  },
  closed_lost_reason: {
    type: "contact",
    disabled: false,
  },
  delivery_model: {
    type: "email",
    disabled: false,
  },
  owner: {
    type: "email",
    disabled: false,
  },
  deal_stage: {
    type: "email",
    disabled: false,
  },
};
async function getrole() {
  let apiUrl = mainUrl + "/profile";
  
  const response = await fetch(apiUrl, {
    headers: { Authorization: "Bearer " + key },
  });

  let data = await response.json();
  data=[data["role"], data["userId"]]
  return data ;
}

async function formating(root, user,role) {
  let userkeys = Object.keys(user);
  let userP = await editUser(role);
//   console.log(userP);
  //making a subroot element to store internal elements
  let subroot = document.createElement("div");
  subroot.setAttribute("class", "details-flexbox");
  userkeys.map((x) => {
    // storing element in subroot (label)
    let label = document.createElement("label");
    label.setAttribute("for", x);
    subroot.appendChild(label);
    label.innerHTML = x.replaceAll("_", " ");
    // storing element in subroot (input)
    let elements = document.createElement("input");
    elements.setAttribute("type", user[x]["type"]);
    elements.setAttribute("id", x);
    elements.setAttribute("name", x);
    // console.log(userP[x], x);
    elements.setAttribute("value", userP[x]);
    elements.classList.add(x);
    if (role[0] == 1) {
      elements.disabled = user[x]["disabled"];
    }
    subroot.appendChild(elements);
    // console.log(elements);

    if (userkeys.indexOf(x) % 2 == 1) {
      //inserting the subroot in root element in set of 2
      root.appendChild(subroot);
      subroot = document.createElement("div");
      subroot.setAttribute("class", "details-flexbox");
    }
  });
  if (userkeys.length % 2 == 1) {
    //inserting any remaining elements
    root.appendChild(subroot);
  }
}
async function editUser(role) {
  console.log((await role)[0]);
  
  let userId = (await role)[1];
  console.log(userId)
  let apiUrl = mainUrl + "/user/" + userId.toString();
  const response = await fetch(apiUrl, {
    headers: { Authorization: "Bearer " + key },
  });
  var data = await response.json();
  console.log(data);
  return data;
}
formating(document.querySelector("#root"), users,getrole());
// getrole();
