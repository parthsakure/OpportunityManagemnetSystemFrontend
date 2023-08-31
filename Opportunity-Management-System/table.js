function createCell(value, classes){
    const cellElement = document.createElement("td");
    if(classes){
        cellElement.classList.add(...classes);
    }
    cellElement.innerText = value;
    return cellElement;
}


function createColumn(value, classes){
    const columnElement = document.createElement("th");
    if(classes) columnElement.classList.add(...classes);
    columnElement.innerText = value;
    return columnElement;
}

function createRow(row, headers, classes,callback){
    //create new row Element
    const rowElement = document.createElement("tr");
    rowElement.setAttribute("onClick", callback);
    rowElement.style.cursor="pointer";
    //Add Classes if available
    if(classes) rowElement.classList.add(...classes);

    //Add values to the row
    headers.forEach(column =>{
        const cell = row[column['value'] ? column['value'] : column];
        rowElement.appendChild(createCell(cell['value'] ? cell['value'] : cell, cell['classes']))        
    })
    return rowElement;
}

function createTable(rootElement,title, data, append=false){
    //Create Table element
    const headers= Object.keys(data[0]["value"]);
    table = document.createElement("table");
    table.classList.add("table","table-striped");

    //create table header
    const headerElement = document.createElement("thead");
    const rowElement = document.createElement("tr");
    //Add columns to table
    headers.forEach(column => {
        rowElement.appendChild(createColumn(column, ['text-left']));
    });
    headerElement.appendChild(rowElement);
    table.appendChild(headerElement);

    //create body element
    const bodyElement = document.createElement("tbody")
    data.forEach(row=>{
        bodyElement.appendChild(createRow(row['value'] ? row['value'] : row, headers, row['classes'],row['callback']));
    });
    table.appendChild(bodyElement);

    //erase everything from root element
    if(!append) rootElement.innerHTML = "";
    rootElement.appendChild(createTitle(title));
    rootElement.appendChild(table);
}