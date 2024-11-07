
// json2html.js
export default function json2html(data) {
  let table = '<table data-user="sriramreddypendyala@gmail.com">';
  table += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  table += '<tbody>';

  // Loop through the data array and build table rows
  data.forEach(row => {
    table += '<tr>';
    table += <td>${row.Name}</td><td>${row.Age}</td>;
    // Check if the "Gender" key exists in the object and add it to the table row
    if (row.Gender) {
      table += <td>${row.Gender}</td>;
    }
    table += '</tr>';
  });

  table += '</tbody></table>';
  return table;
}
