var num = "";
function load(v) {
    num = num + v;
    document.getElementById('val').value = num;
}

function result() {
    document.getElementById('val').value = eval(num);
    num = "";
}

function clr() {
    num = "";
    document.getElementById("val").value = "";
}