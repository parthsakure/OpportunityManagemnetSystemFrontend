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

        users.push({value: user,callback:`view_user(${userdata["userId"]})`});
    })
    return users;
}

function prepareUserForDetails(data){
    let user = {};
    user['Id'] = data["userId"]; 
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

function prepareUserForForm(data){
    let user = {}
    user['userId'] ={name:"userId" ,type:"text" ,disabled :false, value:data['userId']}
    user['username'] = {name:"userId" ,type:'text',disabled: true, value: data['username']}
    user['firstName'] ={name:"first name" ,type:"text" ,disabled :false, value:data['firstName']}
    user['lastname'] ={name:"last name" ,type:"text" ,disabled :false, value:data['lastname']}
    user['company'] ={name:"company" ,type:"text" ,disabled :true, value:data['company']}
    user['role'] ={name:"role" ,type:"text" ,disabled :true, value:data['role']}
    user['constactNo'] ={name:"contact" ,type:"phone" ,disabled :false, value:data['constactNo']}
    user['email'] ={name:"email" ,type:"email" ,disabled :true, value:data['email']}
    
}