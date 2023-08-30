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


function showDetailedView(rootElement, title, data, append=false){
    
    if(!append) rootElement.innerHTML = "";
    rootElement.appendChild(createTitle(title));
    Object.keys(data).forEach(key=>{
        rootElement.append(createField(key, data[key].value ? data[key].value : data[key], data[key].classes ? data[key].classes : []));
    });
    return rootElement;
}