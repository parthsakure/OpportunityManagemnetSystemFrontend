if(localStorage.getItem(TOKEN_NAME)==null){
    document.body.innerHTML = login_html;
    throw "User Not Logged In";
}

const root = document.querySelector("#app");

async function getAdminStatus(){
    const user = await getAuthUser();
    return user['role']['role'] === 'ROLE_ADMIN';
}

async function main(){
    isAdmin = await getAdminStatus();
    const navbarList = [
        {value:"Opportunities", callback: "view_opportunities"},
        {value:"Transactions", callback: "view_transactions"},
    ]
    if(isAdmin){
        navbarList.push({value: "Users", callback:"view_users"});
        navbarList.push({value: "Companies", callback:"view_companies"});
        navbarList.push({value: "Locations", callback:"view_locations"});
    }

    const AccountList = [
        {value:"Profile", callback: "view_profile"},
        {value:"Log Out", callback: "view_logout"},
    ]
    document.querySelector(".collapse").appendChild(createNavBar(navbarList));
    document.querySelector(".collapse").appendChild(createNavBar(AccountList));
    document.querySelector("#app").appendChild(dashboardcards(navbarList));
}

main();
