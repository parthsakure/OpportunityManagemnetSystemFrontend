const BASE_URL= "https://opportunity-management.onrender.com";
const TOKEN_NAME = "jwt_token"


function createTitle(title){
    const h1 = document.createElement("h1");
    h1.textContent = title;
    h1.classList.add("fs-1","mb-5","mt-3","ms-5")
    return h1;
}


function getHeader(){
    const token = localStorage.getItem(TOKEN_NAME);
    if(token==null){
        return {};
    }
    return {Authorization: "Bearer "+token};
}


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
}


function saveToken(data){
    // console.log(parseJwt(data))
    localStorage.setItem(TOKEN_NAME, data);
}