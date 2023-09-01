function prepareLocationForList(data){
    let locs = [];
    data.forEach(element => {
        loc ={};
        loc['Postal Code'] = element['postalCode']
        loc['Country'] = element['country']!=null ? element['country']['country'] : "N/A";
        locs.push({value:loc,callback:`view_location(${element['locationId']})`});
    });
    console.log(locs)
    return locs;
}

function prepareLocationForDetails(data){
        loc ={};
        loc['Id'] = data['locationId']
        loc['Postal Code'] = data['postalCode']
        loc['Country'] = data['country']!=null ? data['country']['country'] : "N/A";
        return loc;
}

function prepareLocationForForm(data){
    let loc = {};
    loc['id'] = {name:"Id", type:"number", disabled: true, value: data['locationId']};
    loc['postalCode'] = {name:"Postal Code", type:"number", disabled: !isAdmin, value: data['postalCode']};
    loc['country'] = {name:"Country", type:"dropdown", disabled: !isAdmin, value: data['country']};

    return loc;
};

function prepareLocationForCreateForm(){
    loc= {};
    loc['id'] = {name:"Id", type:"number", disabled:true, value:0};
    loc['postalCode'] = {name:"Postal Code", type:"number"};
    loc['country'] = {name:"Country", type:"dropdown"};
    return loc;
}