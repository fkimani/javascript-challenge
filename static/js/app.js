// from data.js
var tableData = data;
var submit = d3.select("#filter-btn");

// console.log(tableData)

// us d3 to select table body
var tbody = d3.select("table");

// loop through data and print each object
tableData.forEach(function(ufoData){
    // add table row
    var row = tbody.append("tr");
    
    Object.entries(ufoData).forEach(function([key,value]){
        // console.log(key,value);//comment for now

        // add table data
        var cell = tbody.append("td");

        //add data values to the table rows
        cell.text(value);
        // console.log(key,value);
    });
    
});


// Filter date input
//event handler
submit.on("click", function(){

    //prevent default
    d3.event.preventDefault();

    //select input form element
    var inputElement = d3.select("#datetime");

    //Get value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    

    // use form input to filter data by datetime
    var filterData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filterData);

    //now add the filtered data to the table body
    // loop through data and print each object
    filterData.forEach(function(ufoData){
        // add table row
        var row = tbody.append("tr");
        
        Object.entries(ufoData).forEach(function([key,value]){
            // console.log(key,value);//comment for now

            // add table data
            var cell = tbody.append("td");

            //add data values to the table rows
            cell.text(value);
            // console.log(key,value);
        });
        
    });
    
    //try remove existing table first
    d3.selectAll("tr")
    .data(filterData)
    .selectAll("td")
    .exit()
    .remove();

});


