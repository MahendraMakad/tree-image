// A variable to store html content of table
var html = "";

function printPattern() {
    //removing existing content of table which is stored using html variable
    html="";

    var redbox = document.getElementById("box1").innerHTML;
    var whitebox = document.getElementById("box2").innerHTML;
    let n = document.getElementById("size").value;
    n = parseInt(n);
    let k = n;
    for (let i = 1; i <= n; i++) {
        html += "<tr>";
        for (let j = 1; j < k; j++) {
            html += "<td>";
            html += whitebox;
            html += "</td>";
        }
        for (let j = 1; j <= i; j++) {

            html += "<td>";
            html += redbox;
            html += "</td>";
            if (j == i) break;
            html += "<td>";
            html += whitebox;
            html += "</td>";

        }
        if (i != n) {
            for (let j = 1; j < k; j++) {
                html += "<td>";
                html += whitebox;
                html += "</td>";
            }
        }
        html += "</tr>";
        k--;
    }
    
    document.getElementById("table-1").innerHTML = html;
}
