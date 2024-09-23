
const body = document.body;
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
button1.addEventListener("click", function(){
    body.style.backgroundColor = "red"; 
});
button2.addEventListener("click", function(){
    body.style.backgroundColor = "blue"; 
});
button3.addEventListener("click", function(){
    body.style.backgroundColor = "green"; 
});
button4.addEventListener("click", function(){
    body.style.backgroundColor = "yellow"; 
});
button5.addEventListener("click", function(){
    body.style.backgroundColor = "pink"; 
});