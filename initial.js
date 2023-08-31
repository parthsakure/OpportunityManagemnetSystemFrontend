
const BASE_URL= "https://opportunity-management.onrender.com/";
const TOKEN_NAME = "jwt_token"
let isAdmin = false;
const login_html = `
<div class="google-login">
    <p class="fs-3">You Have to login to access this site</p> 
    <div id="g_id_onload"
        data-client_id="608041237414-nejmrfub71mnuq6r8j84aduj87fhttuu.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost:5500/Opportunity-Management-System"
        data-nonce=""
        data-callback="handleCredentialResponse"
        data-itp_support="true">
    </div>

    <div class="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="filled_black"
        data-text="continue_with"
        data-size="large"
        data-locale="en-US"
        data-logo_alignment="left">
    </div>
</div>`;

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
    return {Authorization: "Bearer "+token,
    'Content-type': 'application/json'
};
}
function saveToken(data){
    localStorage.setItem(TOKEN_NAME, data);
    location.reload();
}
