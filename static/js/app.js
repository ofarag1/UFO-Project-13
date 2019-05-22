// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// tableData values (date/time, city, state, country, shape, and comment)
tableData.forEach(function (ufo) {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(function ([key, value]) {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

