let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let res = document.getElementById("res");
let display = document.getElementById("display")
let num=0;

inc.onclick = function() {
num=num+1;
display.textContent=num;
}
dec.onclick = function() {
num=num-1;
display.textContent=num;
}
res.onclick = function() {
num=0;
display.textContent=num;
}