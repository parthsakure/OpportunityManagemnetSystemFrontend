// function createForm(rootElement,title, data, method) {
//   //   console.log(userP);
//     //making a subroot element to store internal elements
//     console.log(data);
//     const root= document.createElement("form");
//     const datakeys = Object.keys(data);
//     let subroot = document.createElement("div");
//     subroot.classList.add('row','mt-4');
//     datakeys.map(async (x) => {
//       // storing element in subroot (label)
//       // storing element in subroot (input)
//       let elements = null;
//       let label = document.createElement("label");
//       label.setAttribute("for", x);
//       label.classList.add('col');
//       subroot.appendChild(label);
//       label.innerHTML = data[x]['name'];
//       if(data[x]['type'] == 'dropdown'){
        
//         elements = document.createElement("select")
//         elements.classList.add('form-select')
//         elements.setAttribute("name",x);
//         elements.setAttribute("id",x);
//         subroot.appendChild(elements);      
//         if (subroot.childNodes.length >= 4) {
//             root.appendChild(subroot);
//             subroot = document.createElement("div");
//             subroot.classList.add('row','mt-4');
//         }
//         let name = null;
//         let id = null;
//         let options = await getDeliveryModels();
//         if(x=='deliveryModel'){
//           options = await getDeliveryModels();
//           name = 'deliveryModel'
//           id = 'deliveryModelId'
//         }
//         else if(x=='dealStage'){
//           options = await getDealStages();
//           name = 'dealStage'
//           id= 'dealStageId'
//         }
//         else if(x=='dealOwner' && isAdmin){
//           options = await getUsers();
//           name = 'username'
//           id= 'userId'
//         }
//         else if(x=='useCases'){
//           options = await getUseCase();
//           name='useCase'
//           id='useCaseId';
//           elements.multiple = true;
//         }
//         else if(x=='role'){
//           options = await getRoles();
//           name='role'
//           id='roleId';
//       }
//       else if(x=='company'){
//         options = await getCompany();
//         name='companyName'
//         id='companyId';
//       }
//       else if(x=='location'){
//         options = await getLocations();
//         name='postalCode'
//         id='locationId';
//       }
//       else if(x=='industry'){
//         options = await getIndustries();
//         name='industry'
//         id='industryId';
//       }
//       else if(x=='country'){
//         options = await getCountry();
//         name='country'
//         id='countryId';
//       }
//         options.forEach(item => {
//             option = document.createElement('option');
//             option.setAttribute('value',item[id])
//             option.innerHTML = item[name];
//             elements.appendChild(option);
//         });
//       }
//       else{
//         elements = document.createElement("input");
//         elements.setAttribute("type", data[x]["type"]);
//         elements.setAttribute("id", x);
//         elements.setAttribute("name", x);
//         elements.setAttribute("value", method=='PUT'? data[x]['value'] : "");
//         subroot.appendChild(elements);
//       }
//       if(method=='PUT')
//       elements.disabled = data[x]["disabled"];
//       elements.classList.add('col');

  
//       if (subroot.childNodes.length >= 4) {
//         //inserting the subroot in root element in set of 2
//         root.appendChild(subroot);
//         subroot = document.createElement("div");
//         subroot.classList.add('row');
//       }
//     });
//     if (datakeys.length % 2 == 1) {
//       //inserting any remaining elements
//       root.appendChild(subroot);
//     }

//     div = document.createElement('div');
//     div.classList.add('text-center')
//     submit = document.createElement("input");
//     submit.setAttribute('type','submit')
//     submit.setAttribute('value',method=='PUT' ? "Update" : "Create")
//     submit.classList.add('btn','btn-primary','mt-4');
//     div.appendChild(submit);
//     root.appendChild(div);
//     root.setAttribute("id", 'form' );
//     // root.setAttribute("method", method );
//     root.setAttribute("onSubmit", `view_${method=='PUT'? 'update':'update'}_${title.split(' ')[1].toLowerCase()}(${method=='PUT' ? data['id']['value'] : 0},'${method}'); return false;`)
//     rootElement.innerHTML = "";
//     rootElement.appendChild(createTitle(title));
//     rootElement.appendChild(root);
//   }

async function getValues(entityName){
  id=null;
  let name = null;
  values = null;
  switch (entityName) {
    case 'useCases':
      values = await getUseCase();
      id='useCaseId'
      name='useCase'
      break;
  
    case 'deliveryModel':
      values = await getDeliveryModels();
      id='deliveryModelId'
      name='deliveryModel'
      break;
  
    case 'dealStage':
      values = await getDealStages();
      id='dealStageId'
      name='dealStage'
      break;
  
    case 'dealOwner':
      values = await getUsers();
      id='userId'
      name='username'
      break;

    case 'role':
      values = await getRoles();
      id='roleId'
      name='role'
      break;
    
    case 'company':
      values = await getCompany();
      id='companyId'
      name='companyName'
      break;
    
    case 'location':
      values = await getLocations();
      id='locationId'
      name='postalCode'
      break;

    case 'industry':
      values = await getIndustries();
      id='industryId'
      name='industry'
      break;

    case 'country':
      values = await getCountry();
      id='countryId'
      name='country'
      break;
                    
        
    default:
      id=await null;
      name =await null;
      values = await null;
      break;
  }
  return {id:id,name:name,values:values};
}

function createInputElement(data,x){
  const input = document.createElement('input');
  input.setAttribute('type', data['type']);
  input.setAttribute('value', data['value'] ? data['value'] : "");
  input.disabled = data['disabled'] ? data['disabled']: false;
  input.setAttribute('id',x);
  input.classList.add('form-control');
  return input;
}
async function createDropdownElement(data,x) {
  const input = document.createElement('select');
  input.setAttribute('id',x);
  input.classList.add('form-control')
  let vals = await getValues(x);
  console.log(vals);
  vals['values'].forEach(item => {
    option = document.createElement('option');
    option.setAttribute('value',item[vals['id']])
    option.innerHTML = item[vals['name']];
    input.appendChild(option);
  });
  input.multiple = x ==='useCases';
  return input;
}

  function createForm(rootElement,title, data, method) {
    //   console.log(userP);
    //making a subroot element to store internal elements
    const root= document.createElement("form");

    div = document.createElement('div');
    div.classList.add('text-center')
    submit = document.createElement("input");
    submit.setAttribute('type','submit')
    submit.setAttribute('value',method=='PUT' ? "Update" : "Create")
    submit.classList.add('btn','btn-primary','mt-4');
    div.appendChild(submit);
    root.appendChild(div);
    root.setAttribute("id", 'form' );
    // root.setAttribute("method", method );
    root.setAttribute("onSubmit", `view_${method=='PUT'? 'update':'update'}_${title.split(' ')[1].toLowerCase()}(${method=='PUT' ? data['id']['value'] : 0},'${method}'); return false;`)
    rootElement.innerHTML = "";
    rootElement.appendChild(createTitle(title));
    rootElement.appendChild(root);

    
    const datakeys = Object.keys(data);
    datakeys.map(async (x) => {
      let subroot = document.createElement("div");
      subroot.classList.add('form-group');
      const label = document.createElement('label');
      label.setAttribute('for','x');
      label.innerHTML = data[x]['name'];
      subroot.appendChild(label);
      const input =  data[x]['type']!= 'dropdown' ? await createInputElement(data[x],x) : await createDropdownElement(data[x],x);
      subroot.appendChild(input);
      root.insertBefore(subroot, root.lastElementChild);
    });
  


    }