

function createColumn(value, classes){
    const columnElement = document.createElement("th");
    if(classes) columnElement.classList.add(...classes);
    columnElement.innerText = value;
    return columnElement;
}

function createRow(row, headers, classes){
    //create new row Element
    const rowElement = document.createElement("tr");

    //Add Classes if available
    if(classes) rowElement.classList.add(...classes);

    //Add values to the row
    headers.forEach(column =>{
        const cell = row[column.value ? column.value : column];
        rowElement.appendChild(createCell(cell.value ? cell.value : cell, cell.classes))        
    })
    return rowElement;
}


function createTable(rootElement, data, append=false){
    //Create Table element
    const headers= Object.keys(data[0]);
    table = document.createElement("table");
    table.classList.add("table","table-striped");
    table.classList.add("border");
    table.style.width = "80%";
    table.style.margin = "auto";

    const headerElement = document.createElement("thead");
    headerElement.classList.add("border");
    const rowElement = document.createElement("tr");

    if(srno){
        const srNoColumn = document.createElement("th");
        // srNoColumn.classList.add("text-left");
        srNoColumn.innerText = "Sr.No.";
        rowElement.appendChild(srNoColumn);
    }
    headers.forEach(column => {
        const columnElement = document.createElement("th");
        columnElement.classList.add("text-left");
        columnElement.innerText = column.name;
        rowElement.appendChild(columnElement);
    });

    headerElement.appendChild(rowElement);

    table.appendChild(headerElement);

    const bodyElement = document.createElement("tbody")
    let i= 1;
    data.forEach(row=>{
        const rowElement = document.createElement("tr");
        rowElement.style.height="2em";
        if(i%2){
            rowElement.classList.add("bg-gray-200");
        }
        if(srno){
            const srNoColumn = document.createElement("th");
            srNoColumn.innerText = i;
            rowElement.appendChild(srNoColumn);
        }
        headers.forEach(column=>{
            const cellElement = document.createElement("td");
            const cell = row[column.entityName ? column.entityName : column.name];
            cellElement.innerHTML = cell.value ? cell.value : cell;
            if(column.classes){
                column.classes.forEach(cls=>{
                    cellElement.classList.add(cls);
                });
            }
            if(cell.classes){
                cell.classes.forEach(cls=>{
                    cellElement.classList.add(cls);
                });
            }
            rowElement.appendChild(cellElement);
        });
        bodyElement.appendChild(rowElement);
        i++;
    });
    table.appendChild(bodyElement);

    rootElement.innerHTML = "";

    rootElement.appendChild(table);
}