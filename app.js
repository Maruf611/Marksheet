function calculate() {
    var a = parseInt(document.getElementById('subjectOne').value);
    var b = parseInt(document.getElementById('subjectTwo').value);
    var c = parseInt(document.getElementById('subjectThree').value);
    var d = parseInt(document.getElementById('subjectFour').value);
    var e = parseInt(document.getElementById('subjectFive').value);
    var f = parseInt(document.getElementById('subjectSix').value);

    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100 || f > 100) {
        alert("Please Put the correct value");
    } else {

        var obtain = a + b + c + d + e + f;
        document.getElementById('obtained').innerHTML = obtain;

        var per = obtain / 6;
        document.getElementById('percentage').innerHTML = per;

        if (a > 32 && b > 32 && c > 32 && d > 32 && e > 32 && f > 32) {

            document.getElementById('remarks').innerHTML = "<span style='color: green'>Pass</span>";
        } else {
            document.getElementById('remarks').innerHTML = "<span style='color: red'>Fail</span>";
        }

        if (per > 79) {
            document.getElementById('grade').innerHTML = "A+";
        } else if (per > 69 && per < 80) {
            document.getElementById('grade').innerHTML = "A";
        } else if (per > 59 && per < 70) {
            document.getElementById('grade').innerHTML = "A-";
        } else if (per > 49 && per < 60) {
            document.getElementById('grade').innerHTML = "B";
        } else if (per > 39 && per < 50) {
            document.getElementById('grade').innerHTML = "C";
        } else {
            document.getElementById('grade').innerHTML = "F";
        }
    }
}