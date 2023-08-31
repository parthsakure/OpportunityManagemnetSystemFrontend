function deletecomp(sourc){
    const element =document.createElement("div")
    element.classList.add("modal-body")
    const title =document.createElement("h5")
    title.innerHTML= "are you sure about deleting this record"
    // title.appendChild(title)
    element.appendChild(title)
    const button =document.createElement("button")
    button.classList.add("btn","btn-light")
    button.innerHTML= "cancel"
    buttond.setAttribute('onClick')
    element.appendChild(button)

    const buttond =document.createElement("button")
    buttond.classList.add("btn","btn-danger")
    buttond.innerHTML= "delete"
    buttond.setAttribute('onClick',"delete"+`(${sourc})`)
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
