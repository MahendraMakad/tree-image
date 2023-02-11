var html = "";

function printPattern() {
    var redbox = document.getElementById("box1").innerHTML;
    var whitebox = document.getElementById("box2").innerHTML;
    let n = document.getElementById("size").value;
    n = parseInt(n);
    let k=n;
    for(let i=1;i<=n;i++)
    {
        html += "<div>";
        for(let j=1;j<k;j++)
        {
            html += whitebox;
        }
        for(let j=1;j<=i;j++)
        {
            html += redbox;
            html += whitebox;
        }
        let len = 2*n-2*i-k+2;
        for(let j=1;j<len;j++)
        {
            html += whitebox;
        }
        k--;
    }
    // for (let i = 0; i < n; i++) {
    //     html += "<div>";
    //     for (let j = 0; j < 10; j++) {
    //         html += redbox;
    //     }
    //     html += "</div>";
    // }
    document.getElementById("container-1").innerHTML=html;
}
