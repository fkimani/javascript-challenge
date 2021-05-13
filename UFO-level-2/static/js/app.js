// from data.js
var tableData = data;
// var submit = d3.select("#filter-btn");
var submit = d3.select("button");

//select input form element
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");


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

    // //select input form element
    // var inputDate = d3.select("#datetime");

    //Get value property of the input element and trim it
    // input values
    var inputDateValue = inputDate.property("value").trim();
    var inputCityValue = inputCity.property("value").trim();
    var inputStateValue = inputState.property("value").trim();
    var inputCountryValue = inputCountry.property("value").trim();
    var inputShapeValue = inputShape.property("value").trim();

    var inputData = [
    inputDateValue,
    inputCityValue,
    inputStateValue,
    inputCountryValue,
    inputShapeValue
    ]
    console.log("here: " ,inputData);
    

    // use form input to filter data by datetime
    var filterData = tableData.filter(tableData => tableData.datetime === inputDateValue);
    console.log(filterData);

    // clear existing tabledata
    tbody.html("")
    
    //now add the filtered data to the table body
    addData(filterData);
};