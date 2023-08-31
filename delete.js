function deletecomp(data){
    const element =document.createElement("div")
    element.classList.add("modal-body")
    const title =document.createElement("h5")
    title.innerHTML= `Are you sure about deleting ${data['name']}?`
    element.appendChild(title)

    if(data['entity'] == 'opportunity'){
        const input = document.createElement("input");
        input.setAttribute('name','oppotunity');
        input.setAttribute('type','text');
        input.placeholder = "Enter Closed Lost Reason";
        input.required = true;
        input.setAttribute('id','reason');
        element.appendChild(input);
    }

    // title.appendChild(title)
    const button =document.createElement("button")
    button.classList.add("btn","btn-light")
    button.innerHTML= "cancel"
    button.setAttribute('onClick',"")
    element.appendChild(button)

    const buttond =document.createElement("button")
    buttond.classList.add("btn","btn-danger")
    buttond.innerHTML= "delete"
    buttond.setAttribute('onClick',`delete_${data['entity']}(${data['id']})`);
    element.appendChild(buttond)
    return element
}

let sourc={
    "userId": 6,
    "username": "ladaman7",
    "firstName": "Aman",
    "lastName": "Lad",
    "email": "ladaman7@gmail.com",
    "contactNo": null,
    "bbdBucks": 0,
    "active": true,
    "role": {
        "roleId": 1,
        "role": "ROLE_ADMIN"
    },
    "company": null,
    "enabled": true,
    "authorities": [
        {
            "authority": "ROLE_ADMIN"
        }
    ],
    "accountNonExpired": true,
    "accountNonLocked": true,
    "credentialsNonExpired": true,
    "password": "********"
}
