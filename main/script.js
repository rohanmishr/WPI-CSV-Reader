console.clear();

var iterations = 0;
var maxIterations = 999;
var data;
//output CSV in table format
function generateTable(columns, rows) {
  iterations = 0;
  stat.set("Generating table...", LOADING);
  var result = 
  `<table>
    <thead>
      <tr>
        @header
      <tr>
    </thead>
    <tbody>
      @body
    </tbody>
  </table>`;

  var header = "";
  columns.forEach((h) => (header += `<th>${h}</th>`));
  result = result.replace("@header", header);

  var body = "";

  rows.forEach((row) => {
    stat.set(`Adding element (${iterations}/${maxIterations})`, LOADING)
    //prevent more than 999 renders
    if(iterations > maxIterations){
      return;
    }

    var keys = Object.keys(row);
    var b = "";

    //create data block
    keys.forEach((k) => {
      b += `<td>${row[k]}</td>`
    });

    //create data row with blocks inside
    body += "<tr>" + b + "</tr>";

    iterations++;
  });

  //replace body marker with html
  result = result.replace("@body", body);

  console.log(result);
  $("#output")[0].innerHTML = result;
}


function readCsvFile(){
  stat.set("INITIALIZING: Read CSV file...", LOADING);
  var file = $("#csvin_file")[0].files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    data = Papa.parse(e.target.result, { header: true });
    generateTable(data.meta.fields, data.data);
    stat.set("CSV file read.", READY);
  }
  reader.readAsText(file);
}

$("#csvin_file")[0].addEventListener("change", readCsvFile);



