// from data.js
var tableData = data;

// make some vars we will use
var tbody = d3.select("tbody");
var dateButton = d3.select("#filter-btn-date");

// create the table
tableData.forEach(ufo => {
    var tRow = tbody.append("tr");
    Object.entries(ufo).forEach(([key,value]) => {
        var tData = tRow.append("td");
        tData.text(value);
    });
});


// run the button(date)
dateButton.on("click", runEnter);

// complete the handler function 
function runEnter(){
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    tbody.html("");

    filteredData.forEach(ufo => {
        var tRow = tbody.append("tr");
        Object.entries(ufo).forEach(([key,value]) => {
            var tData = tRow.append("td");
            tData.text(value);
        });
    }); 
}



