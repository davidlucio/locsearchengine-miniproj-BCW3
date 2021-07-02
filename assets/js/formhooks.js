let searchForm = $(`#searchform`),
    searchField = $(`#searchfield`),
    formatField = $(`#formatfield`);

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
    getApi( formatInput, searchInput )

    // Clear fields:
    searchField.val("");
    formatField.val("");
});