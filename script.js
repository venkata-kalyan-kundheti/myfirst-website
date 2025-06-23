const decre = document.getElementById("dec");
const incre = document.getElementById("inc");
const rest = document.getElementById("res");
const count = document.getElementById("count");
let cou = 0;
incre.onclick=function(){
    cou++;
    count.textContent = cou;
}
rest.onclick=function(){
    cou=0;
    count.textContent=0;
}
decre.onclick=function(){
    cou--;
    count.textContent = cou;
}
