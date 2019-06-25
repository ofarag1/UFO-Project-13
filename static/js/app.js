// from data.js
var tableData = data;

// YOUR CODE HERE!


// Get references to the tbody element, input field and button using d3 select
var tbody = d3.select("tbody");
var dateInput = d3.select("#datetime");


var stateInput = d3.select("#state")
var cityInput = d3.select("#city");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");
var filterBtn = d3.select("#filter-btn");

// Add event listener for submit button
filterBtn.on("click", SubmitButtonClick);

// Set filteredUFO to data initially
var filteredUFO = data;

// variable to check whether filter button is clicked or not 
var filterClick = false;

// AddTable renders the filteredUFO to the tbody
function AddTable() {
tbody.text(" ");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
filteredUFO.forEach(function(value){
  var row = tbody.append("tr")
  columns.forEach(function(column){
    row.append("td").text(value[column])
  })
})
}
// Filter Table Button
function SubmitButtonClick() {
// Prevent the page from refreshing
  d3.event.preventDefault();
//Get the value property of the input element
  var filterDate = dateInput.property("value");
  var filterState = stateInput.property("value");
  var filterCountry = countryInput.property("value");
  var filterCity = cityInput.property("value");
  var filterShape = shapeInput.property("value");

// setting the filterClick variable as true when button is clicked
  var filterClick = true;

//Printing the input element in the console
  console.log(filterDate);
  console.log(filterState);
  console.log(filterCountry);
  console.log(filterCity);
  console.log(filterShape);

  //setting the filter condition on date 
  if (filterDate != ""){
    filteredUFO = data.filter(function(sighting) 
    {
      var sightingDate = sighting.datetime;
      return sightingDate === filterDate;
    });
  }
  else {
    filteredUFO = data
  }

   //setting the filter condition on state input field
  if(filterState != "")
  {
    filteredUFO = filteredUFO.filter(function(sighting)
    {
      var sightingState = sighting.state;
      return sightingState === filterState;
    });
  }
  else{filteredUFO};

   //setting the filter condition on shape input field
  if(filterShape != "")
  {
    filteredUFO = filteredUFO.filter(function(sighting)
    {
      var sightingShape = sighting.shape;
      return sightingShape === filterShape;
    });
  }
  else{filteredUFO};

   //setting the filter condition on country input field
  if(filterCountry != "")
  {
    filteredUFO = filteredUFO.filter(function(sighting)
    {
      var sightingCountry = sighting.country;
      return sightingCountry === filterCountry;
    });
  }
  else{filteredUFO};

  //setting the filter condition on city input field
  if(filterCity != "")
  {
    filteredUFO = filteredUFO.filter(function(sighting)
    {
      var sightingCity = sighting.city;
      return sightingCity === filterCity;
    });
  }
  else{filteredUFO};
  
  // Displaying the UFO datasets that matches with the filtered conditions
  AddTable();
}

// Render the table for the first time on page load
if(filterClick === false){
  AddTable();
}





    
   

