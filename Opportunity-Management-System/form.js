function createForm(root, data) {
  //   console.log(userP);
    //making a subroot element to store internal elements
    const datakeys = Object.keys(data);
    let subroot = document.createElement("div");
    subroot.classList.add('row');
    datakeys.map(async (x) => {
      // storing element in subroot (label)
      // storing element in subroot (input)
      let elements = null;
      let label = document.createElement("label");
      label.setAttribute("for", x);
      label.classList.add('col');
      subroot.appendChild(label);
      label.innerHTML = data[x]['name'];
      
      console.log(subroot.childNodes.length);
      console.log(x);
      if(data[x]['type'] == 'dropdown'){
        
        elements = document.createElement("select")
        elements.classList.add('form-select')
        elements.setAttribute("name",x);
        elements.disabled = data[x]["disabled"];
        elements.classList.add('col');
        subroot.appendChild(elements);
        let name = null;
        let id = null;
        let options = await getDeliveryModels();
        if(x=='deliveryModel'){
            options = await getDeliveryModels();
            name = 'deliveryModel'
            id = 'deliveryModelId'
        }
        else if(x=='dealStage'){
            options = await getDealStages();
            name = 'dealStage'
            id= 'dealStageId'
        }
        else if(x=='dealOwner' && isAdmin){
            options = await getUsers();
            name = 'username'
            id= 'userId'
        }
        options.forEach(item => {
            option = document.createElement('option');
            option.setAttribute('value',item[id])
            option.innerHTML = item[name];
            elements.appendChild(option);
        });
      }
      else{
        elements = document.createElement("input");
        elements.setAttribute("type", data[x]["type"]);
        elements.setAttribute("id", x);
        elements.setAttribute("name", x);
        elements.setAttribute("value", data[x]['value']);
        elements.disabled = data[x]["disabled"];
        elements.classList.add('col');
        subroot.appendChild(elements);
      }

  
      if (subroot.childNodes.length >= 4) {
        //inserting the subroot in root element in set of 2
        root.appendChild(subroot);
        subroot = document.createElement("div");
        subroot.classList.add('row');
      }
    });
    if (datakeys.length % 2 == 1) {
      //inserting any remaining elements
      root.appendChild(subroot);
    }
  }