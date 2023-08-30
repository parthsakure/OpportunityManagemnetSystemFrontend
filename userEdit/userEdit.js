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
    type:"contact",
    disabled:false 
},
"email":{
    type:"email",
    disabled:false 
}};
function formating(root, user){
let userkeys=Object.keys(user)
//making a subroot element to store internal elements 
let subroot=document.createElement("div");
subroot.setAttribute("class","details-flexbox")
userkeys.map(x=>{

    // storing element in subroot (label)
    let label = document.createElement("label")
    label.setAttribute("for",x)
    subroot.appendChild(label)
    label.innerHTML=x

     // storing element in subroot (input)
  let elements =document.createElement("input") ;
  elements.setAttribute("type",users[x]["type"])
  elements.setAttribute("id",x)
  elements.setAttribute("name",x)
  elements.classList.add(x)
  elements.disabled=(user[x]["disabled"])
    subroot.appendChild(elements);
  console.log(elements);    


  if(userkeys.indexOf(x) % 2 ==1) 
  {
    //inserting the subroot in root element in set of 2
    root.appendChild(subroot);
     subroot=document.createElement("div");
     subroot.setAttribute("class","details-flexbox")
  }

});
if(userkeys.length%2==1){
    //inserting any remaining elements 
    root.appendChild(subroot)
}

}
formating(document.querySelector("#root"),users)