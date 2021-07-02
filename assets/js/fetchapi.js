// let fetchButton = document.getElementById('fetch-button');
let tableBody = document.getElementById('table');
let fetchButton = document.getElementById('fetch-button');
var requestUrl = "https://www.loc.gov/collections?fo=json";

//fetch api function 
function getApi (){
    // var uList = document.querySelector('ul');
    fetch(requestUrl)   
     .then(function (response) {
         console.log(response);
         return response.json();
     })
     .then(function(data){
         console.log(data)
    })
    for (let i = 0; i < data.length; i++) {
        let createTableRow = document.createElement('tr');
        let tableData = document.createElement ('td');
        let link = document.createElement('a');
    
        link.textContent= data[i];
        link.href = data[i].html_url;
    
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);    
    }
}
console.log(getApi)
console.log(requestUrl)
fetchButton.addEventListener('click' , getApi)
console.log(data)
//presenting api in a table 

// for (let i = 0; i < data.length; i++) {
//     var listItem = document.createElement("li");
//    listItem.textContent = data[i].html_url;
//    uList.appendChild(listItem);

// fetchButton.addEventListener('click' , getApi);

//create a function that will populate 
//the function will run for whatever we send it for. 
//