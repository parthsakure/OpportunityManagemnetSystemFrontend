const users={
    "usename":{
    type:"text",
    disabled:true
},
"firstname":{
    type:"text",
    disabled:false
},
"lastname":{
    type:"text",
    disabled:false
},
"company":{
    type:"dropbox",
    disabled:true
},
"role":{
    type:"dropbox",
    disabled:true 
},
"contact":{
    type:"number",
    disabled:false 
},
"email":{
    type:"email",
    disabled:false 
}};
function formating(user){
user.map(x=>console.log( user[x] ))

}