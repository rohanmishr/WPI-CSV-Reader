console.clear();

//output CSV in table format
function generateTable(columns, rows) {
  var result = `<table>
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
    var keys = Object.keys(row)
    var b = "";
    keys.forEach((k) => {
      b += `<td>${row[k]}</td>`
    });
    body += "<tr>" + b + "</tr>"
  });
  result = result.replace("@body", body);

  console.log(result);
  $("#output")[0].innerHTML = result;
}

function readCsv() {  
  var data = Papa.parse($("#csvin")[0].value, { header: true });
  generateTable(data.meta.fields, data.data);
}

