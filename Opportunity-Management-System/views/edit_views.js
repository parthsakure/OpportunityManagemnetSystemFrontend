async function view_user_edit(id){
    const user = await getUsersById(id);
    console.log(user);
}