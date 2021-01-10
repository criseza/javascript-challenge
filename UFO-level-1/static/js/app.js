// from data.js
let tableData = data;

let tableBody = d3.select("#results");
let input = d3.select("#datetime");
let btn = d3.select("#filter-btn");
let allBtn = d3.select("#all-btn");

/**
 * Append
 * @param {array} data an array of data 
 */
function populateTable(data){
    data.forEach(d=>{
        let row = tableBody.append("tr")
        for (x in d){
            row.append("td").text(d[x])
        }
    });
}
populateTable(tableData);

/**
 * Datetime check
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForDates(dato){
    let inputDate = input.node().value;
    console.log(`----- Input Date: ${inputDate} --------`)
    return dato.datetime == inputDate;
}

/**
 * Filter Table
 */
btn.on("click", function() {
    tableBody.html("")
    let filtered = tableData.filter(filterForDates)
    console.log(filtered)
    populateTable(filtered)
  });

  
  /**
   * All button
   */
  allBtn.on("click", function() {
    tableBody.html("")
    populateTable(tableData)
  });


