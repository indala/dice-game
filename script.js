var a=Math.floor(Math.random()*6)+1;
var diceimg1="dice"+a+".png";
var src1="images/"+diceimg1;
document.querySelectorAll("img")[0].src=src1;
var b=Math.floor(Math.random()*6)+1;
var diceimg2="dice"+b+".png";
var src2="images/"+diceimg2;
document.querySelectorAll("img")[1].src=src2;
if(a>b)  document.querySelector("h1").innerHTML="player 1 wins";
else if(a==b)  document.querySelector("h1").innerHTML="draw";
else  document.querySelector("h1").innerHTML="player 2 wins";
