// LEVEL 1
// // from data.js
var tableData = data;
// console.log(data);

// Reference the table body
var tbody = d3.select("tbody");

// // Iterate through every object in data in CALLBACK
// data.forEach(function(populateTable) {
//     console.log(populateTable);
//     // Append "tr"
//     var row = tbody.append("tr");
//     //  Object.entries will console.log each object
//     Object.entries(populateTable).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append "td" for each value
//         var cell = row.append("td");
//         // Print value as text
//         cell.text(value);
//     });
// });

function populateTable(data) {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
}

tableData.forEach(populateTable);

// Select the button
var button = d3.select("#filter-btn");
// Define function 
button.on("click", function() {

    tbody.html("");

    // Select the input date get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(filters) {

    console.log(filters);
    
    // Append "tr" for filtered data
    var row = tbody.append("tr");
    // Object.entries will console.log each object in filtered data
    Object.entries(filters).forEach(function([key, value]) {
        console.log(key, value);
        // Append "td" for each value
        var cell = row.append("td");
        // Print value as text
        cell.text(value);
    });
});
});

