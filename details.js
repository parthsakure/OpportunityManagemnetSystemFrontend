function createField(key, value, classes){
    const root = document.createElement("span");
    root.classList.add("row","row-cols-2")
    const keyElement = document.createElement("strong");
    keyElement.innerHTML = key + ": ";
    root.appendChild(keyElement);

    const valueElement = document.createElement("span");
    valueElement.innerHTML = value;
    root.appendChild(valueElement);
    keyElement.classList.add("col","text-end");
    valueElement.classList.add("col-auto");

    if(classes["key"]){
        keyElement.classList.add(...classes.key);
    }
    if(classes["value"]){
        valueElement.classList.add(...classes.value);
    }
    if(!classes["value"] && !classes["key"]){
        keyElement.classList.add(...classes);
        valueElement.classList.add(...classes);
    }
    return root;
}


function showDetailedView(rootElement, title, data, edit=true){
    
    rootElement.innerHTML = "";
    rootElement.appendChild(createTitle(title));
    Object.keys(data).forEach(key=>{
        rootElement.append(createField(key, data[key].value ? data[key].value : data[key], data[key].classes ? data[key].classes : []));
        if(key.toLowerCase().includes("id")){
            id = data[key];
        }
    });

    if(edit){
        const div = document.createElement("div");
        div.classList.add("text-center","mt-3");
        const btn = document.createElement("button");
        btn.textContent="Edit";
        btn.classList.add('btn','btn-primary','mx-3');
        btn.setAttribute('onClick', `view_${title.split(":")[0].toLowerCase()}_edit(${data['Id']})`);
        div.appendChild(btn);
        rootElement.appendChild(div);
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add('btn','btn-danger','mx-3');
        deleteBtn.setAttribute('onClick',`view_delete_${title.split(":")[0].toLowerCase()}(${id})`);
        deleteBtn.innerHTML="Delete"
        div.appendChild(deleteBtn);

    }
    return rootElement;
}