// Reusable Form Hook -- Just set the IDs
var formID = "test-form",
    searchID = "texttest",
    formatID = "dropdowntest";

let searchForm = $(`#${formID}`),
    searchField = $(`#${searchID}`),
    formatField = $(`#${formatID}`);

// FORM HOOK FOR SEARCH PARAMETERS
searchForm.on("submit", function(event){
    event.preventDefault();

    var searchInput = searchField.val(),
        formatInput = formatField.val();

    if( !searchInput || !formatInput ){
        console.log("ERROR: Form Incomplete");
        return;
    }

    // Connect to Fetch function call here
    console.log(`Searching for ${[searchInput]} within the ${formatInput} category`);

    // Clear fields:
    searchField.val("");
    formatField.val("");
});