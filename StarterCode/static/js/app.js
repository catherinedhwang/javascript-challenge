// from data.js
var tableData = data;
console.log(data);

// Reference the table body
var tbody = d3.select("tbody");

// Iterate through every object in data
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    // Append "tr"
    var row = tbody.append("tr");
    //  Object.entries will console.log each object
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append "td" for each value
        var cell = row.append("td");
        // Print value as text
        cell.text(value);
    });
});
