// from data.js
var tableData = data;
// var submit = d3.select("#filter-btn");
var submit = d3.select("button");

// console.log(tableData)

// us d3 to select table body
var tbody = d3.select("table");

// function to add data
function addData(tdata){
    tdata.forEach(function(data){
        // add table row
        var row = tbody.append("tr");
        
        Object.entries(data).forEach(function([key,value]){
    
            // add table data
            var cell = tbody.append("td");
    
            //add data values to the table rows
            cell.text(value);
            // console.log(key,value);
        });
        
    });
};

// call function and add data to table
addData(tableData);

// event handler when filter button is clicked
submit.on("click", handleClick);

//click handler
function handleClick(){
    //prevent default
    d3.event.preventDefault();

    //select input form element
    var inputElement = d3.select("#datetime");

    //Get value property of the input element and trim it
    var inputValue = inputElement.property("value").trim();
    console.log(inputValue);
    

    // use form input to filter data by datetime
    var filterData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filterData);

    // clear existing tabledata
    tbody.html("")
    
    //now add the filtered data to the table body
    addData(filterData);
};