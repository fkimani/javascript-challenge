// from data.js
var tableData = data;
// var submit = d3.select("#filter-btn");
var submit = d3.select("button");

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

    // //try replace tableData with filterData
    // tbody.selectAll("td").selectAll("td")
    // .data(tableData)
    // .remove()   


// Filter date input
// event handler when filter button is clicked
submit.on("click", handleClick);

//click handler
function handleClick(){
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

    tableData.remove()
    
    //now add the filtered data to the table body
    // loop through data and print each object
    filterData.forEach(function(newData){
        // add table row
        var row = tbody.append("tr");
        
        Object.entries(newData).forEach(function([key,value]){
            // console.log(key,value);//comment for now

            // add table data
            var cell = tbody.append("td");

            //add data values to the table rows
            cell.text(value);
            console.log(key,value);
        });
    });
};






// // later
// function name(d) {
//     return d;
//   }
// d3.selectAll("div").data(tableData, name);
// var div = d3.selectAll("div").data(filterData, name);
// div.exit();
// div.enter();