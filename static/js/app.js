// from data.js
var tableData = data;

// select table body
var tbody = d3.select("table");
// console.log(tableData)

// loop through data and print each object
tableData.forEach(function(ufoData){
    // add table row
    var row = tbody.append("tr");
    
    Object.entries(ufoData).forEach(function([key,value]){
        console.log(key,value);

        // add table data
        var cell = tbody.append("td");

        //add data values to the table rows
        cell.text(value);
        // console.log(key,value);
    });
    
});


