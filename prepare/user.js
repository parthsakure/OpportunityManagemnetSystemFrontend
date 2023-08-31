function prepareUserForList(data){
    let users = [];

    data.forEach(userdata=>{
        let user = {};
        user['Username'] = userdata["username"]; 
        user['Name'] = userdata["firstName"]+" " + userdata["lastName"]; 
        user['E-mail'] = userdata["email"]; 
        const isActive = userdata["active"];
        user['Active'] = {value:isActive,classes:(isActive ? ["bg-success-subtle", "border", "border-success"] :["bg-danger-subtle", "border", "border-danger"])}; 
        user["Role"] = userdata["role"]["role"].substring(6);

        users.push(user);
    })
    return users;
}