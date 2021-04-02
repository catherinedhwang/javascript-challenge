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

    // Select the input data to get the raw HTML node for datetime, city, state, country, and shape. (LEVEL 2 INCLUDED)
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input elements defined above. 
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");
    
    var filteredData = tableData;

    if (dateValue) {
        filteredData = filteredData.filter(sighting => sighting.datetime === dateValue);
    }
    if (cityValue) {
        filteredData = filteredData.filter(sighting => sighting.city === cityValue);
    }
    if (stateValue) {
        filteredData = filteredData.filter(sighting => sighting.state === stateValue);
    }
    if (countryValue) {
        filteredData = filteredData.filter(sighting => sighting.country === countryValue);
    }
    if (shapeValue) {
        filteredData = filteredData.filter(sighting => sighting.shape === shapeValue);
    }
   
    
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

