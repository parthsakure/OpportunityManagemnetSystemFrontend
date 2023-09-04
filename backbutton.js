function redirect(method ,title,data){
   
//    backButton.push(`view_${method=='PUT'? 'update':'update'}_${title.split(' ')[1].toLowerCase()}(${method=='PUT' ? data['id']['value'] : 0},'${method}'); return false;`)
   console.log(backButton)
   return `view_${method=='PUT'? 'update':'update'}_${title.split(' ')[1].toLowerCase()}(${method=='PUT' ? data['id']['value'] : 0},'${method}'); return false;`

}


function goBack() {
    // console.log("nnnnnnnnnnn")
    if (backButton.length==0){
     
       return location.reload();
    } else {
        console.log(backButton)
        backButton.pop()
        return eval(backButton.pop())
    }

 }
//  window.PopStateEvent=()=>{
//     console.log("nnnnnnnnnnn")
//     if (backButton==null){
     
//        return window.location.href = "https://opportunity-management.netlify.app/";
//     } else {
//         console.log(backButton)
//         return backButton.pop()
//     }

//  }