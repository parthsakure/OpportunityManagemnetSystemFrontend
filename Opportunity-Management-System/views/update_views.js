function view_update_opportunity(id){
    form = document.querySelector("#form");
    opportunity = {};
    opportunity['title'] = form.getElementById('title').value
    console.log(opportunity);
}