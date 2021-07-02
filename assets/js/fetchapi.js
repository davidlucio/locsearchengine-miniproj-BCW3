// let fetchButton = document.getElementById('fetch-button');
var requestUrl = "https://www.loc.gov/collections?fo=json";

//fetch api function 
function getApi(format, searchquery){
    // var uList = document.querySelector('ul');
    // TODO: Marcos - Append the paramets below to the requestURL
    console.log(`Searching for ${[searchquery]} within the ${format} category`);


    fetch(requestUrl)   
     .then(function (response) {
         console.log(response);
         return response.json();
     })
     .then(function(data){
         console.log(data)
    })

}