function createNavItem(data){
    const item = document.createElement("li");
    item.classList.add("nav-item",'mx-3','fs-6');
    const aTag = document.createElement("a");
    aTag.classList.add("nav-link")
    aTag.setAttribute("href",'#');
    aTag.setAttribute('onClick',data['callback']+'()')
    aTag.innerText = data['value'];
    item.appendChild(aTag);
   return item;
}


function createNavBar(data) {
    const list = document.createElement("ul");
    list.classList.add("navbar-nav",'me-auto','mb-2');
    const btn =document.createElement("button")
    btn.classList.add("btn","btn-light")
    btn.setAttribute("value","back")
    list.appendChild(btn)
    data.forEach(link => {
        list.appendChild(createNavItem(link));
    });
    return list;
}

