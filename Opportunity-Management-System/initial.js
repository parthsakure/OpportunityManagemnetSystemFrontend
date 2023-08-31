const BASE_URL= "https://opportunity-management.onrender.com";
const TOKEN_NAME = "jwt_token"


function createTitle(title){
    const h1 = document.createElement("h1");
    h1.textContent = title;
    h1.classList.add("fs-1","mb-5","mt-3","ms-5")
    return h1;
}

function HandleToken(response){
    localStorage.setItem(TOKEN_NAME, response.credential);
}


function getHeaders(){
    const token = localStorage.getItem(TOKEN_NAME);

    if(token==null){
        return {};
    }

    return {"Authorization": "Bearer "+token};

}
