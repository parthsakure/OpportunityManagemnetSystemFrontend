function prepareUserForList(data){
    let users = [];

    data.forEach(userdata=>{
        let user = {};
        user['Username'] = userdata["username"]; 
        user['Name'] = userdata["firstName"]+" " + userdata["lastName"]; 
        user['E-mail'] = userdata["email"]; 
        const isActive = userdata["active"];
        user['Active'] = {value:isActive ? "Active" : "Not Active" ,classes:(isActive ? ["bg-success-subtle", "border", "border-success"] :["bg-danger-subtle", "border", "border-danger"])}; 
        user["Role"] = userdata["role"]["role"].substring(5);

        users.push(user);
    })
    return users;
}

function prepareUserForDetails(data){
    let user = {};
    user['Username'] = data["username"]; 
    user['First Name'] = data["firstName"];
    user["Last Name"] = data["lastName"]; 
    user['E-mail'] = data["email"]; 
    user['Contact No.'] = data["contactNo"] ? data["contactNo"] : "N/A"; 
    user['Company'] = data["company"] ? data["company"] : "N/A"; 
    user['BBD Bucks'] = data["bbdBucks"];
    const isActive = data["active"];
    user['Active'] = {value:isActive ? "Active" : "Not Active" ,classes:{value:(isActive ? ["bg-success-subtle", "border", "border-success",'rounded-pill'] :["bg-danger-subtle", "border", "border-danger",'rounded-pill'])}} 
    user["Role"] = data["role"]["role"].substring(5);
    return user;
}