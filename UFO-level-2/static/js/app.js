// from data.js
let tableData = data;

let tableBody = d3.select("#results");
let input = d3.select("#datetime");
let btn = d3.select("#filter-btn");
let allBtn = d3.select("#all-btn");
// New options
let cityDrop = d3.select("#cityDrop");
let stateDrop = d3.select("#stateDrop");
let countryDrop = d3.select("#countryDrop");
let shapeDrop = d3.select("#shapeDrop");
let durationDrop = d3.select("#durationDrop");


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

/**
 * Cities menu
 * @param {Array} data an array of data 
 */
function populateCities(data){
    let cities = Array.from(new Set(data.map(d=>d.city)))
    cityDrop.append("option").text("").attr("value","");
    for(c in cities){
        cityDrop.append("option").text(cities[c]).attr("value",cities[c]);
    }
}

/**
 * State menu
 * @param {Array} data an array of data 
 */
function populateStates(data){
    let states = Array.from(new Set(data.map(d=>d.state)))
    stateDrop.append("option").text("").attr("value","");
    for(s in states){
        stateDrop.append("option").text(states[s]).attr("value",states[s]);
    }
}


/**
 * Country menu
 * @param {Array} data an array of data 
 */
function populateCountries(data){
    let countries = Array.from(new Set(data.map(d=>d.country)))
    countryDrop.append("option").text("").attr("value","");
    for(c in countries){
        countryDrop.append("option").text(countries[c]).attr("value",countries[c]);
    }
}

/**
 * Shapes menu
 * @param {Array} data an array of data 
 */
function populateShapes(data){
    let shapes = Array.from(new Set(data.map(d=>d.shape)))
    shapeDrop.append("option").text("").attr("value","");
    for(s in shapes){
        shapeDrop.append("option").text(shapes[s]).attr("value",shapes[s]);
    }
}

/**
 * Duration menu
 * @param {Array} data an array of data 
 */
function populateDurations(data){
    let durations = Array.from(new Set(data.map(d=>d.durationMinutes)))
    durationDrop.append("option").text("").attr("value","");
    for(d in durations){
        durationDrop.append("option").text(durations[d]).attr("value",durations[d]);
    }
}

// All menus
populateTable(tableData);
populateCities(tableData);
populateStates(tableData);
populateCountries(tableData);
populateShapes(tableData);
populateDurations(tableData);

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
 * City check
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForCities(dato){
    let inputCity = cityDrop.node().value;
    console.log(`----- Input City: ${inputCity} --------`)
    return dato.city == inputCity;
}

/**
 * State check
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForStates(dato){
    let inputState = stateDrop.node().value;
    console.log(`----- Input State: ${inputState} --------`)
    return dato.state == inputState;
}

/**
 * Country check
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForCountries(dato){
    let inputCountry = countryDrop.node().value;
    console.log(`----- Input Country: ${inputCountry} --------`)
    return dato.country == inputCountry;
}

/**
 * Shape check
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForShapes(dato){
    let inputShape = shapeDrop.node().value;
    console.log(`----- Input Shape: ${inputShape} --------`)
    return dato.shape == inputShape;
}

/**
 * Duration check
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForDurations(dato){
    let inputDuration = durationDrop.node().value;
    console.log(`----- Input Duration: ${inputDuration} --------`)
    return dato.durationMinutes == inputDuration;
}


/**
 * Filter table
 */
btn.on("click", function() {
    tableBody.html("")
    // Copy
    let filtered = tableData;

    let inputDate = input.node().value;
    let inputCity = cityDrop.node().value;
    let inputState = stateDrop.node().value;
    let inputCountry = countryDrop.node().value;
    let inputShape = shapeDrop.node().value;
    let inputDuration = durationDrop.node().value;
    
    if (inputDate != ""){
        filtered = filtered.filter(filterForDates)
    }
    if (inputCity != ""){
        filtered = filtered.filter(filterForCities)
    }
    if (inputState != ""){
        filtered = filtered.filter(filterForStates)
    }
    if (inputCountry != ""){
        filtered = filtered.filter(filterForCountries)
    }
    if (inputShape != ""){
        filtered = filtered.filter(filterForShapes)
    }
    if (inputDuration != ""){
        filtered = filtered.filter(filterForDurations)
    }
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


