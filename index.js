var number1=Math.floor(Math.random()*6)+1;
var randiceimg="dice"+number1+".png";
var ransource="images/"+randiceimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ransource);

var number2=Math.floor(Math.random()*6)+1;
var randiceimg2="dice"+number2+".png";
var ransource2="images/"+randiceimg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",ransource2);

if(number1>number2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(number2>number1){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{

document.querySelector("h1").innerHTML="game draw";
}
