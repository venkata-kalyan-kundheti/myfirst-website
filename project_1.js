let number;
number=Math.floor((Math.random()*100));
const result = document.getElementById("result");
const button = document.getElementById("button");
button.onclick=function(){
if(number<30){
    result.textContent=`🥲you have LOW luck: ${number}% today🥲`;
    result.classList.add("low");

}
else if (number < 60) {
    result.textContent=`😊you have MODERATE luck: ${number}% today😊`;
    result.classList.add("mod");
}
else if(number<80){
result.textContent=`😍you have GREAT luck: ${number}% today😍`;
result.classList.add("great");
}
else{
    result.textContent=`👌you have EPIC luck: ${number}% today💕`;
    result.classList.add("high-score");
}
}
